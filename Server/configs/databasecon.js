const mongoose = require("mongoose");

const Connect = async () => {
  try {
    await mongoose.connect(process.env.DATA_URL, {
    
      serverSelectionTimeoutMS: 5000,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = Connect;
