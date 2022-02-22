const Jogador = require("../model/Jogador");
const Patente = require("../model/Patente");


class JogadorController {
  async store(req, res) {
    const data = await Jogador.create(req.body);
    return res.json(data);
  }
  
  async list(req, res) {
    const data = await Jogador.find({});
    return res.json(data);
  }

  async listEspecifico(req, res) {
    const request = req.params.id
    const findJogador = await Jogador.find({_id: request});
    const idPatentes = findJogador[0].patentes
    const patente = await Patente.find({_id: idPatentes})
    let arr = []
    patente.forEach(async (elem) => {
      let obj = {nome: elem.nome, cor: elem.cor}
      arr.push(obj)
      const update = await Jogador.updateOne({_id: request}, {$set: {patentes: obj}})
    })
    const data = await Jogador.find({_id: request});
    return res.json(data);
  }

  async delete(req, res){
    const data = await Jogador.deleteMany()
    return res.json("Tudo certo!")
  }

}


module.exports = new JogadorController();
