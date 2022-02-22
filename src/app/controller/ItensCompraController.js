const ItensCompra = require("../model/ItensCompra");
const Artefato = require("../model/Artefato")
const Compra = require("../model/Compra")

class ItensCompraController {
  
  async store(req, res) {
    const data = await ItensCompra.create(req.body);
    return res.json(data);
  }
  
  async list(req, res) {
    const data = await ItensCompra.find({});
    return res.json(data);
  }

  async listEspecifico(req, res) {
    const request = req.params.id
    const findItens = await ItensCompra.find({_id: request});
    const idsArtefato = findItens[0].artefatos
    let artefatos = []
    for(let elem of idsArtefato){
        if(elem.id == undefined){
            artefatos = [...artefatos, await Artefato.find({_id: elem})]
        } else {
            artefatos = [...artefatos, await Artefato.find({_id: elem.id})]
        }
    }
    
    let arr = []
    for(let elem of artefatos) {
      let obj = {nome: elem[0].nome, peso: elem[0].peso, valor: elem[0].valor, id: elem[0]._id}
      let temElem = findItens[0].artefatos.filter((el) => {
        elem == el
      })
      if(temElem != []){
          arr.push(obj)
          const update = await ItensCompra.updateOne({_id: request}, {$set: {artefatos: [...arr]}})
          //atualizar a referencia de compra somente depois do update pois os dados estarão consistentes
          await Compra.updateOne({_id: findItens[0].compra}, {$set: {itensCompra: request}})
      }
    }

    const data = await ItensCompra.find({_id: request});
    return res.json(data);
  }

  async delete(req, res){
    const data = await ItensCompra.deleteMany()
    return res.json("Tudo certo!")
  }

  async deleteOne(req, res){
    const request = req.params.id 
    const data = await ItensCompra.deleteOne({_id: request})
    return res.json("Exclusão finalizada!")
  }
  
}


module.exports = new ItensCompraController();