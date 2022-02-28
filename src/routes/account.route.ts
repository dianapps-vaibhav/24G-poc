import {Router} from 'express'

import HealthCheckController from '../controllers/account/healthCheck.controller'

import Route from '../interfaces/routes.interface'

class AdminRoutes implements Route {
    public path = '/api/v1/admin'
    public router = Router()

    public healthCheckController = new HealthCheckController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/healthCheck`, this.healthCheckController.ping)
    }
}

export default AdminRoutes
