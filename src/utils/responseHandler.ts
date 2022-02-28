import {Response} from 'express'
import LooseObjectInterface from '../interfaces/common/looseObject.interface'

class responseHandler {
    public init(res: Response, error: boolean, message: string, data = null, status = 200): LooseObjectInterface {
        if (error) {
            return res.status(status).json({
                message,
                status: false,
                code: status,
            })
        } else {
            return res.status(status).json({
                status: !error,
                message,
                code: status,
                data,
            })
        }
    }
}

export default responseHandler
