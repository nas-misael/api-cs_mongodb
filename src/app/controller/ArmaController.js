const Arma = require("../model/Arma");


class ArmaController {
  
  async store(req, res) {
    const data = await Arma.create(req.body);
    return res.json(data);
  }

  async list(req, res) {
    const data = await Arma.find({});
    return res.json(data);
  }
  
}


module.exports = new ArmaController();