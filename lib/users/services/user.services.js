"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var users_model_1 = __importDefault(require("../models/users.model"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var Auth_middleware_1 = require("../middleware/Auth.middleware");
var UsersService = /** @class */ (function () {
    function UsersService() {
    }
    UsersService.getInstance = function () {
        if (!UsersService.instance) {
            UsersService.instance = new UsersService();
        }
        return UsersService.instance;
    };
    UsersService.prototype.create = function (resource, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(resource.country == null)) return [3 /*break*/, 1];
                        return [2 /*return*/, callback({
                                message: "Country is Required",
                            }, "")];
                    case 1: return [4 /*yield*/, users_model_1.default.create(resource)];
                    case 2:
                        user = _a.sent();
                        user
                            .save()
                            .then(function (response) {
                            return callback(null, response);
                        })
                            .catch(function (error) {
                            return callback(error, null);
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.deleteById = function (resourceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, users_model_1.default.findByIdAndDelete(resourceId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.list = function (limit, page) {
        return __awaiter(this, void 0, void 0, function () {
            var filter, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = {};
                        return [4 /*yield*/, users_model_1.default.find(filter)];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        });
    };
    UsersService.prototype.patchById = function (resource, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // return await User.findOneAndUpdate({resourceId})
                users_model_1.default.findOneAndUpdate({ _id: resource.body.id }, resource.body, {
                    new: true,
                    useFindAndModify: false,
                })
                    .then(function (data) {
                    if (!data) {
                        return callback({
                            message: "Cannot update user with id=".concat(resource.params.id, ". Maybe user was not found!"),
                        }, "");
                    }
                    else
                        return callback(null, data);
                })
                    .catch(function (err) {
                    return callback(err, null);
                });
                return [2 /*return*/];
            });
        });
    };
    UsersService.prototype.readById = function (resourceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, users_model_1.default.findById(resourceId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.updateById = function (resource, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                id = resource.params.userId;
                users_model_1.default.findOneAndUpdate({ _id: id }, resource.body, {
                    new: true,
                    useFindAndModify: false,
                })
                    .then(function (data) {
                    if (!data) {
                        return callback({
                            message: "Cannot update user with id=".concat(resource.params.id, ". Maybe user was not found!"),
                        }, "");
                    }
                    else
                        return callback(null, data);
                })
                    .catch(function (err) {
                    return callback(err, null);
                });
                return [2 /*return*/];
            });
        });
    };
    UsersService.prototype.login = function (resource, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var email, password, user, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = resource.email, password = resource.password;
                        return [4 /*yield*/, users_model_1.default.findOne({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (user != null) {
                            if (bcrypt_1.default.compareSync(password, user.country)) {
                                token = (0, Auth_middleware_1.generateAccessToken)(email);
                                // call toJSON method applied during model instantiation
                                return [2 /*return*/, callback(null, __assign(__assign({}, user.toJSON()), { token: token }))];
                            }
                            else {
                                return [2 /*return*/, callback({
                                        message: "Invalid Username/Password!",
                                    }, null)];
                            }
                        }
                        else {
                            return [2 /*return*/, callback({
                                    message: "Invalid Username/Password!",
                                }, null)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.getUserByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_model_1.default.findOne({ email: email })];
            });
        });
    };
    return UsersService;
}());
exports.default = UsersService.getInstance();
//# sourceMappingURL=user.services.js.map