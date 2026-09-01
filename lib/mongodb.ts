import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

const globalForMongo = globalThis as typeof globalThis & {
  mongoClientPromise?: Promise<MongoClient>;
};

export const mongoClientPromise = uri
  ? (globalForMongo.mongoClientPromise ?? new MongoClient(uri).connect())
  : null;

if (process.env.NODE_ENV !== "production" && mongoClientPromise) {
  globalForMongo.mongoClientPromise = mongoClientPromise;
}

export async function getDatabase() {
  if (!mongoClientPromise) return null;
  const client = await mongoClientPromise;
  return client.db(process.env.MONGODB_DB || "portfolio");
}
