"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = (0, tslib_1.__importDefault)(require("mongoose"));
class initDB {
    constructor() {
        const url = process.env.MONGO_URL;
        mongoose_1.default.set('debug', false);
        mongoose_1.default
            .connect(url)
            .then(() => console.log('connected to mongodb'))
            .catch((err) => console.log(`unable to connect mongodb ${err}`));
    }
}
exports.default = initDB;
