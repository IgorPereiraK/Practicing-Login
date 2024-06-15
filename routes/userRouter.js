const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECTION_URL).then(() => {
    console.log('Conectado ao MongoDB com sucesso!')
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error)
  })


router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router