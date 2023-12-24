const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const connectToMongo = require("./connections");
const logger = require("./middlewares/");
require("dotenv").config();

const PORT = 8000;

connectToMongo(process.env.MONGO_CONNECTION_STRING);

// parse application/x-www-form-urlencoded and application/json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// our custom logger
app.use(logger("logs.txt"));

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

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
