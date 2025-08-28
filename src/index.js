import express from "express";

const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Welcome to your first node.js app" });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
