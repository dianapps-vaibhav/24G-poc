import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import hpp from 'hpp'
import morgan from 'morgan'
import path from 'path'
import compression from 'compression'
import Routes from './interfaces/routes.interface'
import errorMiddleware from './middlewares/error.middleware'
import {logger, stream} from './utils/logger'
import rateLimit from 'express-rate-limit'

class App {
    public app: express.Application
    public port: string | number
    public env: string

    constructor(routes: Routes[]) {
        this.app = express()
        this.port = process.env.PORT || 4000
        this.env = process.env.NODE_ENV || 'development'

        this.initializeMiddlewares()
        this.initializeRoutes(routes)
        this.initializeErrorHandling()
        this.initializeTemplatingEngine()
    }

    public listen(): void {
        const server = this.app.listen(this.port, () => {
            logger.info(`🚀 App listening on the port ${this.port}`)
        })

        server.setTimeout(60000)
    }

    public getServer(): unknown {
        return this.app
    }

    private initializeTemplatingEngine() {
        this.app.set('view engine', 'ejs')
    }

    private initializeMiddlewares() {
        if (this.env === 'production') {
            this.app.use(morgan('combined', {stream}))
            this.app.use(cors())
            // this.app.use(cors({ origin: 'your.domain.com', credentials: true }));
        } else if (this.env === 'development') {
            this.app.use(morgan('dev', {stream}))
            this.app.use(cors({origin: true, credentials: true}))
        }

        this.app.use(hpp())

        this.app.use(helmet({contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false}))
        this.app.use(compression())

        this.app.set('trust proxy', 1)

        let maxRequest = 600
        if (this.env === 'development') {
            maxRequest = 200
        }

        const limiter = rateLimit({
            windowMs: 1 * 60 * 1000, // 1 minutes
            max: maxRequest,
        })

        //  apply to all requests
        this.app.use(limiter)

        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(cookieParser())

        this.app.use(
            express.static(path.join(__dirname, 'public'), {
                maxAge: 86400000 * 1, //24 Hours * 30 Days
            })
        )
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach((route) => {
            this.app.use('/', route.router)
        })
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware)
    }
}

export default App
