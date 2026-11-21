const http = require("node:http");

const greeting = process.env.GREETING ?? "Hello";

const commit = process.env.SOURCE_COMMIT_SHORT ?? "dev";

http
  .createServer((req, res) => {
    if (req.url === "/healthz") return res.end("ok");
    if (req.url === "/version") return res.end(commit);
    if (req.url === "/qa")
      return res.end(`QA test PR ${process.env.SPROOBO_PR_NUMBER ?? "-"}: ${greeting}\n`);
    res.end(`${greeting} from ${commit}\n`);
  })
  .listen(3000);
