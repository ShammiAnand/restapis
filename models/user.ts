import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: text("firstName"),
  lastName: text("lastName"),
  email: varchar("email", { length: 256 }),
});

// export const usersRelations = relations(usersTable, ({ many }) => ({
//   posts: many(posts),
// }));

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     gender: {
//       type: String,
//     },
//     jobTitle: {
//       type: String,
//     },
//   },
//   { timestamps: true } // adds createdAt and updatedAt keys in all the documents in the collections
// );

// const User = mongoose.model("users", userSchema);

// module.exports = User;
