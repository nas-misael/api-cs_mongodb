const mongoose = require("mongoose");

const ItensCompraSchema = new mongoose.Schema(
  {
    quantidade: {
      type: Number,
      required: true,
      default: 1,
    },
    valor: {
        type: Number,
        required: true,
        default: 1,
    },
    compra: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Compra",
      required: true,
    },
    artefatos: [
      {
        type: [Object] || mongoose.Schema.Types.Array[ObjectId],
        ref: "Artefato",
        required: true
      },
    ],
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("ItensCompra", ItensCompraSchema);