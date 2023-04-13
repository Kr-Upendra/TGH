// importing packages
import express from "express";
const app = express();

// Middlewares
app.use(express.json());

// Global Routes
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Testing server endpoint!",
  });
});

app.all("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    message: `this endpoint ${req.originalUrl} does not exist on this site!`,
  });
});

export default app;
