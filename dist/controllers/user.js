"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUpdateUserById = exports.handleDeleteUserById = exports.handleCreateUser = exports.handleGetUserById = exports.handleGetAllUsers = void 0;
const user_1 = require("../models/user");
const connections_1 = require("../connections");
const drizzle_orm_1 = require("drizzle-orm");
const handleGetAllUsers = async (req, res) => {
    const allUsers = await connections_1.db.select().from(user_1.usersTable);
    return res.json(allUsers);
};
exports.handleGetAllUsers = handleGetAllUsers;
const handleGetUserById = async (req, res) => {
    const result = await connections_1.db
        .select()
        .from(user_1.usersTable)
        .where((0, drizzle_orm_1.eq)(user_1.usersTable.id, parseInt(req.params.id)));
    return res.json(result);
};
exports.handleGetUserById = handleGetUserById;
const handleCreateUser = async (req, res) => {
    if (!req.body ||
        !req.body.firstName ||
        !req.body.lastName ||
        !req.body.email) {
        return res.status(400).json({
            message: "please provide all the data keys",
        });
    }
    const result = await connections_1.db
        .insert(user_1.usersTable)
        .values({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    })
        .returning({ insertedId: user_1.usersTable.id });
    res.status(200).json({
        message: "new user created",
        userDetails: result,
    });
};
exports.handleCreateUser = handleCreateUser;
const handleDeleteUserById = async (req, res) => {
    const deletedUser = await connections_1.db
        .delete(user_1.usersTable)
        .where((0, drizzle_orm_1.eq)(user_1.usersTable.id, parseInt(req.params.id)))
        .returning();
    return res.json({
        message: "success",
        details: deletedUser,
    });
};
exports.handleDeleteUserById = handleDeleteUserById;
const handleUpdateUserById = async (req, res) => {
    // const result = await User.findByIdAndUpdate(req.params.id, req.body);
    const result = await connections_1.db
        .update(user_1.usersTable)
        .set(Object.assign({}, req.body))
        .where((0, drizzle_orm_1.eq)(user_1.usersTable.id, parseInt(req.params.id)))
        .returning();
    return res.json({
        message: "success",
        details: result,
    });
};
exports.handleUpdateUserById = handleUpdateUserById;
