import 'dotenv/config'
import messages from '../utils/messages'
import {Response, NextFunction} from 'express'
import objectInterface from '../interfaces/common/looseObject.interface'

const authMiddleware = async (req: objectInterface, res: Response, next: NextFunction): Promise<void> => {
    try {
        next()
    } catch (error) {
        res.status(401).send({status: false, message: messages.notAuthorized})
    }
}

export default authMiddleware
