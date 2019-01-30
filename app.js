var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");

var indexRouter = require("./routes/index");
var workRouter = require("./routes/work");
// var partnerRouter = require("./routes/partner");
// var subsidiaryRouter = require("./routes/subsidiary");

var app = express();

// mongoose
const mongoose = require("mongoose");

const configDev = [];
configDev.usr = "mint";
configDev.pwd = "INSCHINAisdead1";
const url = `mongodb://${configDev.usr}:${configDev.pwd}@39.96.61.110/INSLENS`;
const urlBase = 'mongodb://127.0.0.1/INSLENS'

mongoose.connect(
  urlBase,
  { useNewUrlParser: true, useFindAndModify: false }
);
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

app.use("/", indexRouter);
app.use("/work", workRouter);
// app.use("/subsidiary", subsidiaryRouter);
// app.use("/partner", partnerRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.use(bodyParser.urlencoded({ extended: true }));

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
