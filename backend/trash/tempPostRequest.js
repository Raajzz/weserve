const mongoose = require("mongoose")

const TempSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, "This task requires the name property"]
  }
})

const Temp = mongoose.model("Temp", TempSchema);

