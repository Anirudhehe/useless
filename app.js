import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/submit", (req, res) => {
  console.log(req.body);
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  console.log(`the port is live on ${port}`);
});
app.get("/about.html", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});
