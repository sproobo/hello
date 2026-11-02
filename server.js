const http = require("node:http");

const commit = process.env.SOURCE_COMMIT_SHORT ?? "dev";

http
  .createServer((req, res) => {
    if (req.url === "/healthz") return res.end("ok");
    if (req.url === "/version") return res.end(commit);
    res.end(`Hello from ${commit}\n`);
  })
  .listen(3000);
