const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose
      .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => console.log(`MongoDB Connected Successfully`));
  } catch (error) {
    console.log(`Error: ${error.message}`);
    console.log("MongoDB Connection Failed");
    process.exit(1);
  }
};

module.exports = connectDB;
