// CONFIG 
const express = require("express");

const routes = express.Router();


// Import Controllers
const EnderecoController = require("./app/controller/EnderecoController");
const JogadorController = require("./app/controller/JogadorController");
const PatenteController = require("./app/controller/PatenteController");
const ArtefatoController = require("./app/controller/ArtefatoController");
const CompraController = require("./app/controller/CompraController");
const ArmaController = require("./app/controller/ArmaController");
const MunicaoController = require("./app/controller/MunicaoController");
const ItensCompraController = require("./app/controller/ItensCompraController")


// Route primary
routes.get("/", function(req, res) {
 return res.send("Servidor no ar ...");
});

// Routes
routes.get("/endereco", EnderecoController.list);
routes.post("/endereco", EnderecoController.store);

routes.get("/jogadores", JogadorController.list);
routes.post("/jogadores", JogadorController.store);
routes.get("/jogador/:id", JogadorController.listEspecifico);
routes.delete("/jogadores", JogadorController.delete);

routes.get("/patente", PatenteController.list);
routes.post("/patente", PatenteController.store);

routes.get("/artefato", ArtefatoController.list);
routes.post("/artefato", ArtefatoController.store);
routes.delete("/artefato", ArtefatoController.delete);

routes.get("/compra", CompraController.list);
routes.post("/compra", CompraController.store);
routes.get("/compra/:id", CompraController.listEspecifico);
routes.delete("/compra", CompraController.delete);
routes.delete("/compra/:id", CompraController.deleteOne);

routes.get("/itens", ItensCompraController.list);
routes.post("/itens", ItensCompraController.store);
routes.get("/itens/:id", ItensCompraController.listEspecifico);
routes.delete("/itens", ItensCompraController.delete);
routes.delete("/itens/:id", ItensCompraController.deleteOne);

routes.get("/arma", ArmaController.list);
routes.post("/arma", ArmaController.store);

routes.get("/municao", MunicaoController.list);
routes.post("/municao", MunicaoController.store);


module.exports = routes;