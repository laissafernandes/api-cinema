const Atores = require('../models/atores')

class AtoresController {
    static async pegaTodosOsAtores(req,res){
        try {
            const todosOsAtores = await Atores.findAll()
            return res.status(200).json(todosOsAtores)
        } catch (error) {
            return res.status(500).json(error.message)
        }
      
    }

    static async atorId(req, res) {

    const {id} = req.params;
    
    try {

      const firstRegistro = await cinema.findOne({ 
        where: {
          id: id
        }
      })

      return res.status(200).json(firstRegistro)

    } catch (error) {

      return res.status(400).json(error.message)
    }
  }

    static async adicionaReg(req, res) {

    const newRegistro = req.body;

    try {

      const createRegistro = await cinema.create(newRegistro)

      return res.status(201).json(createRegistro)

    } catch (error) {
      return res.status(400).json(error.message)
    }
  }

    static async updateRegistro(req, res) {

    const {id} = req.params;
    const modificaReg = req.body

    try {
      await cinema.update(modificaReg, {where: {id: id}})

      const regUpdate = await database.findOne({where: {id: id}})

      return res.status(200).json(regUpdate)

    } catch (error) {
      return res.status(400).json(error.message)
    }
  }

  static async deleteRegistro(req, res) {

    const {id} = req.params;

    try {

      await cinema.destroy({where: {id:id}})
      return res.status(200).json({mensagem: `O id de número: ${id} foi deletado com sucesso!!!`})

    } catch (error) {
      return res.status(400).json(error.message)
    }
  }
}

module.exports = AtoresController;