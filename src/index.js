import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Welcome to your first node.js app" });
});

app.listen(PORT, () => {
  console.log("Server is running on port 4000");
});
