import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import i18n from "i18n";

import indexRouter from "./routes/index";

var app = express();

// mongoose
import mongoose from "mongoose";
import connectionString from "./config";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on("open", () => {
  console.log("MongoDB Connection Success");
});
db.on("error", () => {
  console.log("MongoDB Connection Error");
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// i18n
var setI18n = () => {
  const i18nOptions = {
    locales: ["en", "zh-CN"],
    directory: path.join(__dirname, "./locale"),
    defaultLocale: "en",
    objectNotation: true,
    updateFiles: true
  };

  i18n.configure(i18nOptions);
  return i18n.init;
};
app.use(setI18n());

app.use((req, res, next) => {
  const locale = req.acceptsLanguages();
  res.locals.__ = res.__ = function() {
    return i18n.__.apply(req, arguments);
  };

  if (req.cookies.locale) {
    i18n.setLocale(req, req.cookies.locale);
  } else {
    i18n.setLocale(req, locale[0]);
    res.cookie("locale", locale[0]);
  }

  next();
});

// router
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
