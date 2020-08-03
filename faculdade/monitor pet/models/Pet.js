const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pet = new Schema({
    nome: {
        type: String,
        require: true,
        index: true
    },
    idade: {
        type: Number,
        min: 0,
        max: 30
    },
    sexo: {
        type: String,
        enum: ['M', 'F', 'm', 'f']
    },
    porte: {
        type: String,
        enum: ['P', 'M', 'G', 'p', 'm', 'g']
    },
    tipo: {
        type: String
    },
    raca: {
        type: String
    },
    //referência a coleção pulseira fazendo assim uma relação
    pulseira: {
        type: Number,
        require: true,
        unique: true,
        index: true
    },
    //Referencia a coleção tutor fazendo assim uma relação
    tutor: {
        type: Schema.Types.ObjectId,
        ref: 'Tutor',
        require: true
    },
    coordenadas: {
        type: Schema.Types.ObjectId,
        ref: 'Pulseira',
        require: true
    }
})

mongoose.model('Pet', Pet)

module.exports = mongoose.model('Pet', Pet)