const Atores = require('../models/atores')

class AtoresController {
    static async pegaTodosOsAtores(req,res){
        try{
            const todosOsAtores = await Atores.findAll()
            return res.status(200).json(todosOsAtores)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmAtor(req, res) {
      const { id } = req.params
      try {
        const umAtor = await Atores.findOne( { 
          where: { 
            id: Number(id) 
          }
        })
        return res.status(200).json(umAtor)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async criaAtor(req, res) {
      const novoAtor = req.body
      try {
        const novoCriado = await Atores.create(novoAtor)
        return res.status(200).json(novoCriado)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async atualizaAtor(req, res) {
      const { id } = req.params
      const novasInfos = req.body
      try {
        await Atores.update(novasInfos, { where: { id: Number(id) }})
        const appAtualizado = await Atores.findOne( { where: { id: Number(id) }})
        return res.status(200).json(appAtualizado)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async apagaAtor(req, res) {
      const { id } = req.params
      try {
        await Atores.destroy({ where: { id: Number(id) }})
        return res.status(200).json({ mensagem: `O id ${id} foi deletado com sucesso!` })
  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
  }
module.exports = AtoresController;