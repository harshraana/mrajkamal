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
    /**
     * Pin the database name in code. This is a single-store app and ALWAYS uses
     * the `mrajkamal` database; the connection string only needs to carry the
     * host and credentials.
     *
     * `dbName` overrides whatever database is — or isn't — named in the URI, so
     * a connection string that omits it (e.g. Atlas's "Connect" default, which
     * ends in `mongodb.net/?...`) can no longer silently send the app to the
     * empty `test` database. That exact mistake blocked admin login in
     * production: the app connected fine but found no admin, because the URI's
     * db-name was missing. Atlas authenticates against `authSource=admin`
     * regardless, so pinning the query database does not affect the login.
     */
    dbName: "mrajkamal",

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
