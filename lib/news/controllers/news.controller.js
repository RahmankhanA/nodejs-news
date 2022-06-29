"use strict";
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
// we import our newly created user services
var news_services_1 = __importDefault(require("../services/news.services"));
// we use debug with a custom context as described in Part 1
var debug_1 = __importDefault(require("debug"));
var log = (0, debug_1.default)('app:users-controller');
var NewsController = /** @class */ (function () {
    function NewsController() {
    }
    // this will be a controller singleton (same pattern as before)
    NewsController.getInstance = function () {
        if (!NewsController.instance) {
            NewsController.instance = new NewsController();
        }
        return NewsController.instance;
    };
    // async listUsers(req: express.Request, res: express.Response) {
    //     const users = await usersService.list(100, 0);
    //     res.status(200).send(users);
    // }
    // async getUserById(req: express.Request, res: express.Response) {
    //     const user = await usersService.readById(req.params.userId);
    //     res.status(200).send(user);
    // }
    NewsController.prototype.createNews = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                news_services_1.default.create(req.body, function (error, results) {
                    if (error) {
                        return next(error);
                    }
                    return res.status(200).send({
                        message: "Success",
                        data: results,
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    NewsController.prototype.listNews = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                news_services_1.default.list(req.body, function (error, results) {
                    if (error) {
                        return next(error);
                    }
                    return res.status(200).send({
                        message: "Success",
                        total: results.length,
                        data: results,
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    NewsController.prototype.SingleNews = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                news_services_1.default.singleNews(req.body, function (error, results) {
                    if (error) {
                        return next(error);
                    }
                    return res.status(200).send({
                        message: "Success",
                        total: results.length,
                        data: results,
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    NewsController.prototype.searchByQuery = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                query = req.body.id;
                news_services_1.default.search(req.body, function (error, results) {
                    if (error) {
                        return next(error);
                    }
                    return res.status(200).send({
                        message: "Success",
                        total: results.length,
                        data: results,
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    return NewsController;
}());
exports.default = NewsController.getInstance();
//# sourceMappingURL=news.controller.js.map