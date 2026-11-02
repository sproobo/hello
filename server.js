const http = require("node:http");

const greeting = process.env.GREETING;
if (!greeting) {
  console.error("GREETING is not set");
  process.exit(1);
}

const commit = process.env.SOURCE_COMMIT_SHORT ?? "dev";

http
  .createServer((req, res) => {
    if (req.url === "/healthz") return res.end("ok");
    if (req.url === "/version") return res.end(commit);
    res.end(`${greeting} from ${commit}\n`);
  })
  .listen(3000);
