const mongoose = require("mongoose");

const MunicaoSchema = new mongoose.Schema(
  {
    explosiva: {
      type: Boolean,
      required: true,
    },
    calibre: {
      type: String, // C03, C05, C08
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Municao", MunicaoSchema);
