const { Router } = require('express')
const AtoresController = require('../controllers/AtoresController')

const router = Router()

router.get('/atores', AtoresController.pegaTodosOsAtores)

module.exports = router