import {Request, Response} from 'express'
import { getRepository } from 'typeorm'
import Orphanage from '../models/Orphanage'
import orphanages_view from '../views/orphanages_view'
import * as Yup from 'yup'


export default {
    //Seleciona todos itens
    async index(request: Request, repsonse: Response) {
        const orphanagesRepository = getRepository(Orphanage)

        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        })

        return repsonse.status(200).json(orphanages_view.renderMany(orphanages))
    },

    //Seleciona um item
    async show(request: Request, repsonse: Response) {
        const { id } = request.params

        const orphanagesRepository = getRepository(Orphanage)

        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        })

        return repsonse.status(200).json(orphanages_view.render(orphanage))
    },

    //Cria, posta itens na tabela
    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body
    
        const orphanagesRepository = getRepository(Orphanage)

        const requestImages = request.files as Express.Multer.File[]
        const images = requestImages.map(image => {
            return {
                path: image.filename
            }
        })

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            open_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        })

        await schema.validate(data, {
            abortEarly: false,
        })
    
        const orphanage = orphanagesRepository.create(data)
    
        await orphanagesRepository.save(orphanage)
    
        return await response.status(201).json({
            message: "Dados inseridos com sucesso."
        })
    }
}