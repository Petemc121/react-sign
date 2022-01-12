const express = require("express");
const router = require("express").Router();
const app = express();
const cors = require("cors");
const pool = require("./database");
const port = 5000;
const path = require("path");

app.use(cors());
app.use(express.json()); //req.body
app.use("/", router);
app.use(express.static(path.join(__dirname, "build")));

app.post("/members", async (req, res) => {
  try {
    const { user_name, user_email, user_password } = req.body;
    console.log(req.body);
    console.log(user_name);

    const newMember = await pool.query(
      "INSERT INTO members (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
      [user_name, user_email, user_password]
    );

    res.json(newMember.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
