"use strict";
// const mongoose = require("mongoose");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
// const connectToMongo = async (url) => {
//   return mongoose.connect(url).then(() => console.log("connected to MongoDB"));
// };
// module.exports = connectToMongo;
const postgres_js_1 = require("drizzle-orm/postgres-js");
const postgres_1 = __importDefault(require("postgres"));
require("dotenv").config();
const connectionString = process.env.DATABASE_URL || "";
console.log(connectionString);
// Disable prefetch as it is not supported for "Transaction" pool mode
const client = (0, postgres_1.default)(connectionString, { prepare: false });
exports.db = (0, postgres_js_1.drizzle)(client);
