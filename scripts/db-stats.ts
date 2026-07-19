/**
 * Report storage + index usage per collection on the live cluster, so you can
 * keep an eye on how much of the free tier's 512 MB is in use.
 *
 *   npm run db:stats
 *
 * `indexes` is often many times larger than `data` on a small catalogue —
 * that's fixed per-index overhead, not a problem. Watch the DB TOTAL line.
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production");

const kb = (n: number) => `${(n / 1024).toFixed(1)} KB`;

async function main() {
  const mongoose = (await import("mongoose")).default;
  await mongoose.connect(process.env.MONGODB_URI!, { bufferCommands: false });
  const db = mongoose.connection.db!;
  console.log("db:", db.databaseName);

  const dbStats = await db.stats();
  console.log(
    `\nDB TOTAL  data=${kb(dbStats.dataSize)}  storage=${kb(dbStats.storageSize)}  ` +
      `indexes=${kb(dbStats.indexSize)}  objects=${dbStats.objects}\n`,
  );

  const cols = await db.listCollections().toArray();
  for (const { name } of cols.sort((a, b) => a.name.localeCompare(b.name))) {
    const s = (await db.command({ collStats: name })) as {
      count: number;
      size: number;
      storageSize: number;
      avgObjSize?: number;
      totalIndexSize: number;
      indexSizes: Record<string, number>;
      nindexes: number;
    };
    console.log(
      `${name}\n  docs=${s.count}  data=${kb(s.size)}  storage=${kb(s.storageSize)}  ` +
        `avgDoc=${s.avgObjSize ? kb(s.avgObjSize) : "-"}\n` +
        `  indexes=${s.nindexes}  totalIndex=${kb(s.totalIndexSize)}`,
    );
    for (const [ix, sz] of Object.entries(s.indexSizes)) {
      console.log(`    - ${ix}: ${kb(sz)}`);
    }
    console.log();
  }

  await mongoose.disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
