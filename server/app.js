// * Issue 2:
// For admin signup just go to the auth 
// controller then newUser obj, you will 
// find a role field. role:1 for admin signup & 
// role: 0 or by default it for customer signup.
// go user model and see the role field.

const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db.js");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const bodyParser = require("body-parser");

// Import Router
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/categories");
const productRouter = require("./routes/products");
const brainTreeRouter = require("./routes/braintree");
const orderRouter = require("./routes/orders");
const usersRouter = require("./routes/users");
const customizeRouter = require("./routes/customize");
const contactusRouter = require("./routes/contactus");
// Import Auth middleware for check user login or not~
const { loginCheck } = require("./middleware/auth");
const path = require("path");

// MongoDB Connection
connectDB();

// Middleware
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());
// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", authRouter);
app.use("/api/user", usersRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api", brainTreeRouter);
app.use("/api/order", orderRouter);
app.use("/api/customize", customizeRouter);
app.use("/api/contact-us", contactusRouter)

// Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

// Run Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
