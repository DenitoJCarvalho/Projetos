import express, { response } from 'express'

import './database/connection'

const app = express()

app.use(express.json())

app.get('/', async(request, response) => {
    return await response.json({
        message: "Back-End"
    })
})

app.listen(3333)