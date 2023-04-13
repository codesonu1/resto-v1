const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

exports.connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_DEV_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `mongodb connected ${conn.connection.host}-${process.env.MONGODB_DEV_URI}`
    );
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
  }
};
