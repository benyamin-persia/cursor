import express, { Request, Response } from "express";

const app = express(); // Create Express application instance

app.use(express.json()); // Parse incoming JSON request bodies

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello from Cursor!" }); // Root endpoint returns a greeting
});

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", uptime: process.uptime() }); // Health check with server uptime
});

export default app;
