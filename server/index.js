const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

app.get("/", (_req, res) => {
  res.send("FocusForge API is running...");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});