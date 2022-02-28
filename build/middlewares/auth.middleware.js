"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("dotenv/config");
const messages_1 = (0, tslib_1.__importDefault)(require("../utils/messages"));
const authMiddleware = async (req, res, next) => {
    try {
        next();
    }
    catch (error) {
        res.status(401).send({ status: false, message: messages_1.default.notAuthorized });
    }
};
exports.default = authMiddleware;
