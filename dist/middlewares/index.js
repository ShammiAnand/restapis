"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const fs_1 = __importDefault(require("fs"));
const logger = (filename) => {
    return (req, _res, next) => {
        fs_1.default.appendFile(filename, `\n${new Date().toLocaleDateString()} [${req.method} ${req.path}]`, (_err, _data) => {
            next();
        });
    };
};
exports.logger = logger;
