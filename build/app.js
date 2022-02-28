"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cookie_parser_1 = (0, tslib_1.__importDefault)(require("cookie-parser"));
const cors_1 = (0, tslib_1.__importDefault)(require("cors"));
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const helmet_1 = (0, tslib_1.__importDefault)(require("helmet"));
const hpp_1 = (0, tslib_1.__importDefault)(require("hpp"));
const morgan_1 = (0, tslib_1.__importDefault)(require("morgan"));
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const compression_1 = (0, tslib_1.__importDefault)(require("compression"));
const error_middleware_1 = (0, tslib_1.__importDefault)(require("./middlewares/error.middleware"));
const logger_1 = require("./utils/logger");
const express_rate_limit_1 = (0, tslib_1.__importDefault)(require("express-rate-limit"));
class App {
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 4000;
        this.env = process.env.NODE_ENV || 'development';
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeErrorHandling();
        this.initializeTemplatingEngine();
    }
    listen() {
        const server = this.app.listen(this.port, () => {
            logger_1.logger.info(`🚀 App listening on the port ${this.port}`);
        });
        server.setTimeout(60000);
    }
    getServer() {
        return this.app;
    }
    initializeTemplatingEngine() {
        this.app.set('view engine', 'ejs');
    }
    initializeMiddlewares() {
        if (this.env === 'production') {
            this.app.use((0, morgan_1.default)('combined', { stream: logger_1.stream }));
            this.app.use((0, cors_1.default)());
            // this.app.use(cors({ origin: 'your.domain.com', credentials: true }));
        }
        else if (this.env === 'development') {
            this.app.use((0, morgan_1.default)('dev', { stream: logger_1.stream }));
            this.app.use((0, cors_1.default)({ origin: true, credentials: true }));
        }
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)({ contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false }));
        this.app.use((0, compression_1.default)());
        this.app.set('trust proxy', 1);
        let maxRequest = 600;
        if (this.env === 'development') {
            maxRequest = 200;
        }
        const limiter = (0, express_rate_limit_1.default)({
            windowMs: 1 * 60 * 1000,
            max: maxRequest,
        });
        //  apply to all requests
        this.app.use(limiter);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public'), {
            maxAge: 86400000 * 1, //24 Hours * 30 Days
        }));
    }
    initializeRoutes(routes) {
        routes.forEach((route) => {
            this.app.use('/', route.router);
        });
    }
    initializeErrorHandling() {
        this.app.use(error_middleware_1.default);
    }
}
exports.default = App;
