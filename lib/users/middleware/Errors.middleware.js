"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(err, req, res) {
    if (typeof err === "string") {
        // custom application error
        return res.status(400).json({ message: err });
    }
    if (err.name === "ValidationError") {
        // mongoose validation error
        return res.status(400).json({ message: err.message });
    }
    if (err.name === "UnauthorizedError") {
        // jwt authentication error
        return res.status(401).json({ message: "Token not valid" });
    }
    // default to 500 server error
    return res.status(500).json({ message: err.message });
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=Errors.middleware.js.map