import app from "./app";

const PORT = process.env.PORT || 3000; // Use env PORT or default to 3000

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
