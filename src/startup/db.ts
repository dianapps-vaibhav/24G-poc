import mongoose from 'mongoose'

class initDB {
    constructor() {
        const url = process.env.MONGO_URL

        mongoose.set('debug', false)
        mongoose
            .connect(url)
            .then(() => console.log('connected to mongodb'))
            .catch((err) => console.log(`unable to connect mongodb ${err}`))
    }
}

export default initDB
