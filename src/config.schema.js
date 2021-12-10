"use strict";
exports.__esModule = true;
exports.configValidationSchema = void 0;
var Joi = require("@hapi/joi");
exports.configValidationSchema = Joi.object({
    STAGE: Joi.string().required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number()["default"](5432),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_DATABASE: Joi.string().required(),
    JWT_SECRET: Joi.string().required()
});
