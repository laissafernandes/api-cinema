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
}

module.exports = AtoresController;