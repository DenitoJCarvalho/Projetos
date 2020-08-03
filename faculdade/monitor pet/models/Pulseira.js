const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pulseira = Schema({
    tutor: {
        type: Schema.Types.ObjectId,
        ref: 'Tutor'
    },
    identificacao: {
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    },
    datahora: {
        type: Date,
        default: Date.now
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    status: {
        type: String,
        enum: ['Ativo', 'Desativado'],
        default: 'Desativado'
    }
})


mongoose.model('Pulseira', Pulseira)

module.exports = mongoose.model('Pulseira', Pulseira)

/*const novaPulseira = mongoose.model('Pulseira')
new novaPulseira({
    datahora: '2019-11-10T15:25:05Z',
    latitude: -23.2915,
    longitude: -48.1055,
    status: 'Ativo'

}).save().then(() => {
    console.log(`Usuário criado com sucesso!`)
}).catch((err) => {
    console.log(`Erro ao registrar os dados. ERRO[${err}}]`)
})*/