"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class responseHandler {
    init(res, error, message, data = null, status = 200) {
        if (error) {
            return res.status(status).json({
                message,
                status: false,
                code: status,
            });
        }
        else {
            return res.status(status).json({
                status: !error,
                message,
                code: status,
                data,
            });
        }
    }
}
exports.default = responseHandler;
