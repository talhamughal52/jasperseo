import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

let cached = global.mongoose || { conn: null, promise: null };

if (!cached.conn) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

  cached.promise =
    cached.promise ||
    mongoose
      .connect(MONGODB_URL, {
        dbName: "jasper_seo",
        bufferCommands: false,
      })
      .then(() => {
        console.log("Connected to database");
      })
      .catch((error) => {
        console.error("Error connecting to database:", error);
      });

  cached.conn = await cached.promise;

  return cached.conn;
};
