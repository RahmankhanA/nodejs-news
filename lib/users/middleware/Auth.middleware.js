"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = exports.authenticateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authenticateToken(req, res, next) {
    var authHeader = req.headers['authorization'];
    var token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.sendStatus(401);
    jsonwebtoken_1.default.verify(token, "process.env.TOKEN_SECRET", function (err, user) {
        console.log(err);
        if (err)
            return res.sendStatus(403);
        req.body.username = user;
        next();
    });
}
exports.authenticateToken = authenticateToken;
function generateAccessToken(email) {
    return jsonwebtoken_1.default.sign({ data: email }, "process.env.TOKEN_SECRET", {
        expiresIn: "180d",
    });
}
exports.generateAccessToken = generateAccessToken;
//# sourceMappingURL=Auth.middleware.js.map