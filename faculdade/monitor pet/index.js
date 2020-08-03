const express = require('express') //importando o express
const handlebars = require('express-handlebars') //importando handlebars
const app = express() //instanciando o express
const bodyParser = require('body-parser') //importando a bibloteca bodyparser
const admin = require('./routes/admin') //importando o modulo de rotas
const mongoose = require('mongoose') //importando a bibloteca mongoose
const Pet = mongoose.model('Pet') //importando o modeleo Pet
const Pulseira = mongoose.model('Pulseira') //importando o modelo Pulseira

app.use(express.static('views')) //arquvivo public
    //config
    //template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//configurando o bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//configurando o mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/monitor_pet').then(() => {
    console.log('Conectado ao banco de dados MongoDB')
}).catch((err) => {
    console.log(`Erro ao conectar ao banco de dados. ERRO[${err}]`)
})

//Rotas
app.use('/', admin) //rota para a página inicial

//Verificando e abrindo aplicativo na porta 9090
app.listen(9090, () => { console.log(`Aplicativo rodando na porta: ${9000}`) })