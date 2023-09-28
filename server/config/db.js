const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb+srv://kishan:Kishan@cluster0.yi7wxf8.mongodb.net/bda?retryWrites=true&w=majority");

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
