const Artefato = require("../model/Artefato");

class ArtefatoController {
  async store(req, res) {
    const data = await Artefato.create(req.body);
    return res.json(data);
  }

  async list(req, res) {
    const data = await Artefato.find({});
    return res.json(data);
  }

  async delete(req, res){
    const data = await Artefato.deleteMany()
    return res.json("Tudo certo!")
  }
  
}


module.exports = new ArtefatoController();
