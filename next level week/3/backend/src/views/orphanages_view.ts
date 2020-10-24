import Orphanage from '../models/Orphanage'
import imagesView from './images_view'

export default {
    render(orphanage: Orphanage) {
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.opening_hours,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: imagesView.renderMany(orphanage.images)
        }
    },

    renderMany(orphanges: Orphanage[]){
        return orphanges.map(orphanage => this.render(orphanage))
    }
}