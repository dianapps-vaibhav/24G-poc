import {cleanEnv, port, str} from 'envalid'

const validateEnv = (): void => {
    cleanEnv(process.env, {
        NODE_ENV: str(),
        MONGO_URL: str(),
    })
}

export default validateEnv
