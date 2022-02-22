const mongoose = require("mongoose");

const CompraSchema = new mongoose.Schema(
  {
    total: {
      type: Number,
      required: true,
      default: 0,
    },
    jogador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Jogador",
      required: true,
    },
    itensCompra: [
      {
        type: [Object] || mongoose.Schema.Types.Array[ObjectId],
        ref: "ItensCompra",
      },
    ],
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Compra", CompraSchema);
