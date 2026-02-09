const { calculateDays } = require("../models/expirationModel");

function expirationRoutes(req, res) {
  if (req.method === "POST" && req.url === "/expiration") {
    let body = "";

    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      const data = JSON.parse(body);
      const daysLeft = calculateDays(data.year, data.month, data.day);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ daysLeft }));
    });
  }
}

module.exports = expirationRoutes;
