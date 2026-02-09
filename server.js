const http = require("http");
const expirationRoutes = require("./routes/expirationRoutes");

const PORT = process.env.PORT || 3009;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  expirationRoutes(req, res);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Expiration backend running on port ${PORT}`);
});
