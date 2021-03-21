// require mongoose
const mongoose = require("mongoose");

// connect DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is connected...");
  } catch (error) {
    console.error(`connection to db failed !! ${error}`);
  }
};

module.exports = connectDB;
