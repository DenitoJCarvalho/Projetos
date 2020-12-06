import express from 'express'
import ClassesControler from './controllers/classesController'
import ConnectionController from './controllers/ConnectionsControllers'

const routes = express.Router()
const classesContrllers = new ClassesControler()

const connectionController = new ConnectionController 

routes.post('/classes', classesContrllers.create)
routes.get('/classes', classesContrllers.index)

routes.post('/connections', connectionController.create)
routes.get('/connections', connectionController.index)

export default routes