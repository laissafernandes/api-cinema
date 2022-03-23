const { Router } = require('express')
const AtoresController = require('../controllers/AtoresController')

const router = Router()

router.get('/atores', AtoresController.pegaTodosOsAtores)
router.get('/atores/:id', AtoresController.pegaUmAtor)
router.post('/atores', AtoresController.criaAtor)
router.put('/atores/:id', AtoresController.atualizaAtor)
router.delete('/atores/:id', AtoresController.apagaAtor)

module.exports = router