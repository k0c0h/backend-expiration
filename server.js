const http = require("http");
const expirationRoutes = require("./routes/expirationRoutes");

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

server.listen(3009, () => {
  console.log("Expiration backend running on http://localhost:3009");
});
