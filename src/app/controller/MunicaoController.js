const Municao = require("../model/Municao");


class MunicaoController {
  
  async store(req, res) {
    const data = await Municao.create(req.body);
    return res.json(data);
  }

  async list(req, res) {
    const data = await Municao.find({});
    return res.json(data);
  }
  
}


module.exports = new MunicaoController();