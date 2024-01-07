"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.usersTable = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    firstName: (0, pg_core_1.text)("firstName"),
    lastName: (0, pg_core_1.text)("lastName"),
    email: (0, pg_core_1.varchar)("email", { length: 256 }),
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
