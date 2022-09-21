process.env.NODE_ENV !== "production" ? require("dotenv").config() : null;

// const createError = require("http-errors");
const express = require("express");
const cors = require("cors");

const callbackHandler = require("./routes/callback");
//

let app = express();

// app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
// app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(methodOverride('_method'));

// Setup routes
app.use("/callback", callbackHandler);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   //   res.status(err.status || 500);
//   //   res.render("error");
//   res.json({ error: err.message });
// });

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});
