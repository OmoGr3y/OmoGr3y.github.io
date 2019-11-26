const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const compress = require("compression");

const app = express();
const root = path.join(__dirname, "../../");

app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "data:", "*.amazonaws.com"]
    }
  })
);

app.use(helmet.referrerPolicy({ ppolicy: "same-origin" }));
app.use(compress());

app.use("/", express.static(path.join(root, "dist/client")));
app.use("/uploads", express.static(path.join(root, "uploads")));
app.get("/", (req, res) => {
  res.sendFile(path.join(root, "/dist/client/index.html"));
});

app.get(
  "/",
  (req, res, next) => {
    console.log("first funtion");
    next();
  },
  function(req, res) {
    console.log("second function");
    res.send("Hello World!");
  }
);
app.listen(8000, () => console.log("Listening on port 8000!"));
