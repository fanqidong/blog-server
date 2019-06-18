import express from "express";
import db from "./mongodb/db";
import config from "./config/default";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import session from "express-session";
import connectMongo from "connect-mongo";
import router from "./routes/index";
const app = express();
app.all("*", (req, res, next) => {
  const { origin, Origin, referer, Referer } = req.headers;
  const allowOrigin = origin || Origin || referer || Referer || "*";
  res.header("Access-Control-Allow-Origin", allowOrigin);
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
  res.header("X-Powered-By", "Express");
  if (req.method == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

const MongoStore = connectMongo(session);
app.use(cookieParser());
app.use(
  session({
    name: config.session.name,
    secret: config.session.secret,
    resave: true,
    saveUninitialized: false,
    cookie: config.session.cookie,
    store: new MongoStore({
      url: config.url
    })
  })
);

router(app);

app.listen(config.post, function() {
  console.log(chalk.green(`服务器启动成功，端口${config.post}`));
});
