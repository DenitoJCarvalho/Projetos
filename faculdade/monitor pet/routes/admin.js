const express = require('express') //importando a biblioteca express
const router = express.Router() //importando o modulo router
const mongoose = require('mongoose') //importando o mangoose
require('../models/Tutors') //importando a pasta com o modelo Tutor
const Tutor = mongoose.model('Tutor')
const Pet = require('../models/Pet') //importando a pasta com o modelo Pet
const Pulseira = require('../models/Pulseira') //importando a pasta com o modelo Pulseira


//rota principal
router.get('/', (req, res) => {
    res.send('Aplicativo conectado a porta a https://127.0.0.1:9000')
})

// início
router.get('/home', (req, res) => {
    res.render('index')
})

//cadastro de tutor
router.post('/tutor', (req, res) => {

    var tutor = new Tutor()
    tutor.nome = req.body.nome
    tutor.sobrenome = req.body.sobrenome
    tutor.cpf = req.body.cpf
    tutor.data_nascimento = req.body.data_nascimento
    tutor.sexo = req.body.sexo
    tutor.logradouro = req.body.logradouro
    tutor.numero = req.body.numero
    tutor.bairro = req.body.bairro
    tutor.cidade = req.body.cidade
    tutor.estado = req.body.estado
    tutor.fixo = req.body.telefone
    tutor.celular = req.body.celular
    tutor.email = req.body.email
    tutor.save().then(() => {
        res.status(200).send({ message: "Dados salvos co sucesso." })
        console.log('Dados salvos co sucesso.')
    }).catch((error) => {
        res.status(400).send({ message: "Erro ao salvar os dados.", error: error })
        console.log(`Erro ao salvar os dados. ERRO[${error}]`)
    })
})

//cadastro pet
router.post('/pet', (req, res) => {
    const pet = new Pet()
    const pulseira = new Pulseira()
    const tutor = new Tutor()
    pet.nome = req.body.nomePet
    pet.idade = req.body.idadePet
    pet.sexo = req.body.genero
    pet.porte = req.body.porte
    pet.tipo = req.body.tipoPet
    pet.raca = req.body.raca
    pet.pulseira = req.body.pulseira
    pet.tutor = tutor._id
    pet.coordenadas = pulseira._id
    pet.save().then(() => {
        res.status(200).send({ message: "Dados salvos co sucesso." })
        console.log('Dados salvos co sucesso.')
    }).catch((error) => {
        res.status(400).send({ message: "Erro ao salvar os dados.", error: error })
        console.log(`Erro ao salvar os dados. ERRO[${error}]`)
    })
})

//consultas
router.post('/consulta', (req, res) => {
    const pulseira = req.body.numPulseira
    Pet.find({
        pulseira: pulseira
    }).populate('tutor').then((pets) => {
        res.status(200).render('answer', { pets: pets })
    }).catch((error) => {
        res.status(400).send(`Houve um erro ao consultar os dados. ERRO[${error}]`)
    })
})


module.exports = router