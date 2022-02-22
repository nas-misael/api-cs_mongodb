const mongoose = require("mongoose");

const ArmaSchema = new mongoose.Schema(
  {
    comprimento_cano: {
      type: Number,
      required: true,
    },
    tipo: {
      type: String, //BRANCA || FOGO
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Arma", ArmaSchema);
