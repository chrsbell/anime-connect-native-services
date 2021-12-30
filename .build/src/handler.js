"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const lambda_api_1 = __importDefault(require("lambda-api"));
const api = (0, lambda_api_1.default)();
api.get('/', (req, res) => res.status(200).json({
    message: 'Hello from root!',
}));
const handler = async (event, context) => await api.run(event, context);
exports.handler = handler;
