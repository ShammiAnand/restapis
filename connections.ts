// const mongoose = require("mongoose");

// const connectToMongo = async (url) => {
//   return mongoose.connect(url).then(() => console.log("connected to MongoDB"));
// };

// module.exports = connectToMongo;

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
require("dotenv").config();

const connectionString: string = process.env.DATABASE_URL || "";
console.log(connectionString);

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);
