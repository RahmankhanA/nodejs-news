"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var MONGO_USERNAME = process.env.MONGO_USERNAME || 'mongo';
var MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'mongo';
// const MONGO_URL = `mongodb://localhost:27017/myapp`;
var MONGO_URL = "mongodb+srv://".concat(MONGO_USERNAME, ":").concat(MONGO_PASSWORD, "@cluster0.ecd7b.mongodb.net/db");
var SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;
exports.config = {
    mongo: {
        username: MONGO_USERNAME,
        password: MONGO_PASSWORD,
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};
//# sourceMappingURL=config.js.map