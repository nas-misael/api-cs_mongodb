const mongoose = require("mongoose");

const ArtefatoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    peso: {
      type: Number,
      required: true,
      default: 0,
    },
    valor: {
      type: Number,
      required: true,
      default: 0,
    },
    armas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Arma",
      },
    ],
    municao: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Municao",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Artefato", ArtefatoSchema);
