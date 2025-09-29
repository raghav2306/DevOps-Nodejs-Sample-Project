import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Raghav");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

export default app