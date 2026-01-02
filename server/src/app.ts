import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

export const app = express();

// Security
app.use(helmet());
app.use(cors({ origin: false }));
app.use(rateLimit({ windowMs: 60_000, max: 100 }));

// Parsing
app.use(express.json());

// Routes
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    uptime: process.uptime(),
  });
});

// Errors
