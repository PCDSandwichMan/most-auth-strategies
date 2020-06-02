import express, { Application, Request, Response, NextFunction } from "express";
// const mongoose = require("mongoose");
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
import config from "./utils/config.js";
import helmet from "helmet";
import path from "path";
import "./passport";
import passport from "passport";
import cookieParser from "cookie-parser";

const app: Application = express();
const http = require("http").Server(app);
// const io = require("socket.io")(http);

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));
}

// mongoose.connect(config.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// const database = mongoose.connection;

// database.on("error", (err) => console.log(err));

// database.once("open", () => {
//-  Route Setup
app.use("", require("./routes/authRoute"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// Route 404 Fallback
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.accepts("json")) {
    res.status(404).json({ error: "this route could not be found" });
  }
  next();
});

// Server Connection
http.listen(config.PORT, () =>
  console.log(`app listening on PORT: ${config.PORT}`)
);
// });
