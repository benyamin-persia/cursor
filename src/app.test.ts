import app from "./app";
import http from "http";

let server: http.Server;

beforeAll((done) => {
  server = app.listen(0, done); // Start on random port for test isolation
});

afterAll((done) => {
  server.close(done); // Clean up after tests
});

function getPort(): number {
  const addr = server.address();
  if (addr && typeof addr === "object") return addr.port;
  throw new Error("Server address not available");
}

async function fetch(path: string): Promise<{ status: number; body: unknown }> {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:${getPort()}${path}`, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () =>
        resolve({ status: res.statusCode ?? 0, body: JSON.parse(data) })
      );
      res.on("error", reject);
    });
  });
}

describe("GET /", () => {
  it("returns greeting message", async () => {
    const { status, body } = await fetch("/");
    expect(status).toBe(200);
    expect(body).toEqual({ message: "Hello from Cursor!" });
  });
});

describe("GET /health", () => {
  it("returns ok status with uptime", async () => {
    const { status, body } = await fetch("/health");
    expect(status).toBe(200);
    expect(body).toHaveProperty("status", "ok");
    expect(body).toHaveProperty("uptime");
  });
});
