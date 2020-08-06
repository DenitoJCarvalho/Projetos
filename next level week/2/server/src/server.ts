import express from 'express'

const app = express()

app.use(express.json)

app.get('/users', (req, res) => {
    const users = [
        { name: 'Adrian', age: 0.5 },
        { name: 'Lili', age: 4}
    ]

    return res.json(users)
})

app.post('/', (req, res) => {    
    return res.json({
        message: "Segunda aula NWL"
    })
})

app.listen(9000) //localhost:9000