import express, { Request, Response } from "express";
import { router as userRouter } from "./routes/user";
// import { logger } from "./middlewares/";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// parse application/x-www-form-urlencoded and application/json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// our custom logger
// app.use(logger("logs.txt"));

// @TODO: move this to static route or maybe create a view for this
app.get("/", (req: Request, res: Response) => {
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

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
