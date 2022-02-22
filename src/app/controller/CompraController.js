const Compra = require("../model/Compra");
const Jogador = require("../model/Jogador")

class CompraController {
  
  async store(req, res) {
    const data = await Compra.create(req.body);
    return res.json(data);
  }
  
  async list(req, res) {
    const data = await Compra.find({});
    return res.json(data);
  }

  async listEspecifico(req, res) {
    const request = req.params.id
    const data = await Compra.find({_id: request});
    const jogador = await Jogador.findOne({_id: data[0].jogador})
    const compraArr = jogador.compras
    console.log(jogador)
    const update = await Jogador.updateOne({_id: data[0].jogador}, {$set: {compras: [...compraArr, request]}})
    return res.json(data);
  }

  async delete(req, res){
    const data = await Compra.deleteMany()
    return res.json("Tudo certo!")
  }

  async deleteOne(req, res){
    const request = req.params.id 
    const data = await Compra.deleteOne({_id: request})
    return res.json("Exclusão finalizada!")
  }
  
}


module.exports = new CompraController();
