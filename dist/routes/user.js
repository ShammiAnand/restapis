"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const user_1 = require("../controllers/user");
exports.router.route("/").get(user_1.handleGetAllUsers).post(user_1.handleCreateUser);
exports.router
    .route("/:id")
    .get(user_1.handleGetUserById)
    .patch(user_1.handleUpdateUserById)
    .delete(user_1.handleDeleteUserById);
