"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./routes/user");
// import { logger } from "./middlewares/";
require("dotenv").config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
// parse application/x-www-form-urlencoded and application/json
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// our custom logger
// app.use(logger("logs.txt"));
// @TODO: move this to static route or maybe create a view for this
app.get("/", (req, res) => {
    res.send(`
  <ul>
    <li> GET <code>/users</code> - List all users </li>
    <li> GET /users/:id - Get the user with id=id </li>
    <li> POST /users - Create a new user and return its id </li>
    <li> PATCH /users/:id - Edit the user info with the id </li>
    <li> DELETE /users/:id - Delete user </li>
  </ul>
  `);
});
app.use("/users", user_1.router);
app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});
