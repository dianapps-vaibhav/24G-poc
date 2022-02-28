"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const healthCheck_controller_1 = (0, tslib_1.__importDefault)(require("../controllers/account/healthCheck.controller"));
class AdminRoutes {
    constructor() {
        this.path = '/api/v1/admin';
        this.router = (0, express_1.Router)();
        this.healthCheckController = new healthCheck_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}/healthCheck`, this.healthCheckController.ping);
    }
}
exports.default = AdminRoutes;
