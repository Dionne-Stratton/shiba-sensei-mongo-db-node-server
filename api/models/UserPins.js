const mongoose = require("mongoose");

const inuUserPinSchema = new mongoose.Schema({
  email: String,
  pin: String,
  //expires in 30 minutes
  expireAt: { type: Date, default: Date.now, expires: 1800 },
});

mongoose.model("UserPin", inuUserPinSchema);
