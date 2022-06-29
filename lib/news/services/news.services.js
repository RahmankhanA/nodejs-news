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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var news_model_1 = __importDefault(require("../models/news.model"));
var flexsearch_1 = require("flexsearch");
// import bcrypt from "bcrypt";
// import { generateAccessToken } from "../middleware/Auth.middleware";
// import { mail } from "../../config/mail.config";
// import nodemailer from "nodemailer";
// import otpGenerator from "otp-generator";
var NewsService = /** @class */ (function () {
    function NewsService() {
    }
    NewsService.getInstance = function () {
        if (!NewsService.instance) {
            NewsService.instance = new NewsService();
        }
        return NewsService.instance;
    };
    NewsService.prototype.create = function (resource, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // return await usersDao.addUser(resource);
                news_model_1.default.insertMany(resource)
                    .then(function (response) {
                    return callback(null, response);
                })
                    .catch(function (error) {
                    return callback(error, null);
                });
                return [2 /*return*/];
            });
        });
    };
    NewsService.prototype.list = function (resource, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var page, limit, filter, skip, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        page = resource.page, limit = resource.limit, filter = __rest(resource, ["page", "limit"]);
                        skip = (parseInt(page) - 1) * parseInt(limit);
                        return [4 /*yield*/, news_model_1.default.find(filter)
                                .skip(skip)
                                .limit(limit)
                                .sort("-createdAt")];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, callback(null, data)];
                }
            });
        });
    };
    NewsService.prototype.singleNews = function (resource, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var id, filter, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = resource.id, filter = __rest(resource, ["id"]);
                        return [4 /*yield*/, news_model_1.default.findById(id)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, callback(null, data)];
                }
            });
        });
    };
    NewsService.prototype.search = function (resource, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var page, limit, searchItem, filter, skip, data, options, index, ids, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        page = resource.page, limit = resource.limit, searchItem = resource.searchItem, filter = __rest(resource, ["page", "limit", "searchItem"]);
                        skip = (parseInt(page) - 1) * parseInt(limit);
                        return [4 /*yield*/, news_model_1.default.find(filter)];
                    case 1:
                        data = _a.sent();
                        options = {
                            charset: "extra",
                            preset: "match",
                            tokenize: "strict",
                            cache: false,
                        };
                        index = new flexsearch_1.Index({ tokenize: "strict", cache: false });
                        // index my collection
                        data.forEach(function (recipe) {
                            var data = recipe.title + recipe.summary;
                            index.add(recipe._id, data);
                        });
                        ids = index.search(searchItem, limit);
                        result = data.filter(function (recipe) { return ids.includes(recipe._id); });
                        // const document = new Document({tokenize: 'strict',
                        // cache: false});
                        // data.forEach((recipe) =>{
                        //     document.add(recipe._id, recipe.summary);
                        // });
                        // const ids = document.search(searchItem, limit);
                        return [2 /*return*/, callback(null, result)];
                }
            });
        });
    };
    return NewsService;
}());
exports.default = NewsService.getInstance();
//# sourceMappingURL=news.services.js.map