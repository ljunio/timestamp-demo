import express from "express";
import mongoose from "mongoose";
import User from "./user"

const app = express();

mongoose.connect("mongodb://localhost:27017/sample")

app.post("/api/user", async (req, res) => {
  try {
    const created = await User.create({ name: "Joe", age: 14 });
    res.send(created)
  } catch (error) {
    console.log({ error })
  }
});

app.listen(3000, () => console.log(`Listening on 3000`));
