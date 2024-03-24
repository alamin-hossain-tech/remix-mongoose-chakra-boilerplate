import mongoose, { Connection } from "mongoose";

let DB: Connection | null = null;
const dbConnect = async () => {
  if (DB) return DB;
  try {
    await mongoose.connect("mongodb://localhost:27017");
    DB = mongoose.connection;
  } catch (error) {
    return null;
  }
};

export default dbConnect;
