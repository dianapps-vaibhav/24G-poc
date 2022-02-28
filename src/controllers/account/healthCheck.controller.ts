import {Response} from 'express'

import messages from '../../utils/messages'
import responseHandler from '../../utils/responseHandler'
import helper from '../../utils/helper'
import objectInterface from '../../interfaces/common/looseObject.interface'

class HealthCheckController {
    public responseHandler = new responseHandler()
    public helper = new helper()

    public ping = async (req: objectInterface, res: Response): Promise<objectInterface> => {
        try {
            return this.responseHandler.init(res, false, messages.success, [], 200)
        } catch (ex) {
            return this.responseHandler.init(res, true, messages.somethingWentWrong, [], 500)
        }
    }
}

export default HealthCheckController
