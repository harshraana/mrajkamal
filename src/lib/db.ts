import "server-only";
import mongoose from "mongoose";

/**
 * Mongoose connection, cached on globalThis.
 *
 * The cache is not an optimisation — it is required. Next's dev server reloads
 * modules on every edit, and serverless runtimes re-enter the module on every
 * cold start; without a global cache each one opens a fresh connection pool
 * until Mongo starts refusing them.
 */

declare global {
  var _mongoose:
    | { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null }
    | undefined;
}

const cache = (globalThis._mongoose ??= { conn: null, promise: null });

/**
 * Is a database reachable *in principle*?
 *
 * The cached read functions run at build time too, where CI may have no Mongo.
 * They call this first and return empty data rather than failing the build.
 */
export function isDbConfigured(): boolean {
  return Boolean(process.env.MONGODB_URI?.trim());
}

export async function connectDB(): Promise<typeof mongoose> {
  const uri = process.env.MONGODB_URI?.trim();
  if (!uri) throw new Error("MONGODB_URI is not set");

  if (cache.conn) return cache.conn;

  cache.promise ??= mongoose.connect(uri, {
    // Fail fast instead of queueing operations against a dead connection —
    // a hung query is much harder to diagnose than a thrown one.
    bufferCommands: false,
    serverSelectionTimeoutMS: 5_000,
  });

  try {
    cache.conn = await cache.promise;
  } catch (error) {
    // Clear the rejected promise, or every later call re-awaits the same
    // failure and the process can never recover once Mongo comes back.
    cache.promise = null;
    throw error;
  }

  return cache.conn;
}
