const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Model - Tutor
const Tutor = new Schema({
    //dados pessoais
    nome: {
        type: String,
        require: true,
    },
    sobrenome: {
        type: String,
        require: true
    },
    cpf: {
        type: Number,
        require: true,
        unique: true
    },
    data_nascimento: {
        type: Date,
        require: true
    },
    sexo: {
        type: String,
        enum: ['M', 'F']
    },
    //dados de endereço
    logradouro: {
        type: String,
        require: true
    },
    numero: {
        type: Number,
    },
    bairro: {
        type: String
    },
    cidade: {
        type: String,
        require: true
    },
    estado: {
        type: String,
        require: true
    },
    //dados de contato
    fixo: {
        type: String
    },
    celular: {
        type: String
    },
    email: {
        type: String
    }
})

mongoose.model('Tutor', Tutor)

module.exports = mongoose.model('Tutor', Tutor)




/*const novoTutor = mongoose.model('tutors')
new novoTutor({
    nome: 'Amy',
    sobrenome: 'Deni de Carvalho',
    cpf: 00100200304,
    data_nascimento: '2000-06-15',
    sexo: 'F'
}).save().then(() => {
    console.log(`Usuário criado com sucesso!`)
}).catch((err) => {
    console.log(`Erro ao registrar os dados. ERRO[${err}}]`)
})*/