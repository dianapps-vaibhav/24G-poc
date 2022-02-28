"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("dotenv/config");
const app_1 = (0, tslib_1.__importDefault)(require("./app"));
const account_route_1 = (0, tslib_1.__importDefault)(require("./routes/account.route"));
const validateEnv_1 = (0, tslib_1.__importDefault)(require("./utils/validateEnv"));
const db_1 = (0, tslib_1.__importDefault)(require("./startup/db"));
(0, validateEnv_1.default)();
new db_1.default();
const app = new app_1.default([new account_route_1.default()]);
app.listen();