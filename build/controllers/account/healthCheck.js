"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const messages_1 = (0, tslib_1.__importDefault)(require("../../utils/messages"));
const responseHandler_1 = (0, tslib_1.__importDefault)(require("../../utils/responseHandler"));
const helper_1 = (0, tslib_1.__importDefault)(require("../../utils/helper"));
class HealthCheckController {
    constructor() {
        this.responseHandler = new responseHandler_1.default();
        this.helper = new helper_1.default();
        this.addRestaurantAdmin = async (req, res) => {
            try {
            }
            catch (ex) {
                return this.responseHandler.init(res, true, messages_1.default.somethingWentWrong, [], 500);
            }
        };
    }
}
exports.default = HealthCheckController;
