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
var node_fetch_1 = __importDefault(require("node-fetch"));
var axios_1 = __importDefault(require("axios"));
var news_model_1 = __importDefault(require("../models/news.model"));
var url = "https://open-api.klonba.xyz";
var fs_1 = __importDefault(require("fs"));
// const countryLanguage=[
//   {
//     "country": "India",
//     "countryCode": "IN",
//     "language": "Hindi",
//     "languageCode": "hi"
//   },
//   {
//     "country": "Indonesia",
//     "countryCode": "ID",
//     "language": "Indonesian",
//     "languageCode": "id"
//   },
//   {
//     "country": "Pakistan",
//     "countryCode": "PK",
//     "language": "Urdu",
//     "languageCode": "ur"
//   },
//   {
//     "country": "Japan",
//     "language": "Japanese",
//     "countryCode": "JP",
//     "languageCode": "ja"
//   },
//   {
//     "country": "Philippines",
//     "language": "Spanish",
//     "countryCode": "PH",
//     "languageCode": "es"
//   },
//   {
//     "country": "Iran",
//     "countryCode": "IR",
//     "language": "Persian",
//     "languageCode": "fa"
//   },
//   {
//     "country": "United Arab Emirates",
//     "countryCode": "AE",
//     "language": "Arabic",
//     "languageCode": "ar"
//   },
//   {
//     "country": "Turkey",
//     "countryCode": "TR",
//     "language": "Turkish",
//     "languageCode": "tr"
//   },
//   {
//     "country": "Jordan",
//     "countryCode": "JO",
//     "language": "Arabic",
//     "languageCode": "ar"
//   },
//   {
//     "country": "Italy",
//     "countryCode": "IT",
//     "language": "Italian",
//     "languageCode": "it"
//   },
//   {
//     "country": "UNITED STATES",
//     "countryCode": "US",
//     "language": "English",
//     "languageCode": "en"
//   },
//   {
//     "country": "Brazil",
//     "countryCode": "BR",
//     "language": "Portuguese",
//     "languageCode": "pt"
//   },
//   {
//     "country": "Thailand",
//     "countryCode": "TH",
//     "language": "Thai",
//     "languageCode": "th"
//   },
//   {
//     "country": "Vietnam",
//     "countryCode": "VN",
//     "language": "Vietnamese",
//     "languageCode": "vi"
//   },
//   {
//     "country": "Colombia",
//     "countryCode": "CO",
//     "language": "Spanish",
//     "languageCode": "es"
//   },
//   {
//     "country": "Sri Lanka",
//     "countryCode": "LK",
//     "language": "Sinhala",
//     "languageCode": "si"
//   },
//   {
//     "country": "Nepal",
//     "countryCode": "NP",
//     "language": "Nepali",
//     "languageCode": "ne"
//   },
//   {
//     "country": "South Korea",
//     "countryCode": "KR",
//     "language": "Korean",
//     "languageCode": "ko"
//   },
//   {
//     "country": "Morocco",
//     "countryCode": "MA",
//     "language": "Arabic",
//     "languageCode": "ar"
//   },
//   {
//     "country": "Switzerland",
//     "countryCode": "CH",
//     "language": "German",
//     "languageCode": "de"
//   }
// ];
var countryLanguage = [
    {
        "country": "India",
        "countryCode": "IN",
        "language": "Hindi",
        "languageCode": "hi"
    },
];
var headlines = [
    "world",
    "nation",
    "business",
    "technology",
    "entertainment",
    "science",
    "sports",
    "health",
    "politics",
];
var getNews = function (lang, country, topic, query) { return __awaiter(void 0, void 0, void 0, function () {
    var result, _a, result, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (!query) return [3 /*break*/, 6];
                _c.label = 1;
            case 1:
                _c.trys.push([1, 4, , 5]);
                return [4 /*yield*/, (0, node_fetch_1.default)("".concat(url, "/api/news/").concat(lang, "/").concat(country, "/ALL?q=").concat(query))];
            case 2:
                result = _c.sent();
                return [4 /*yield*/, result.json()];
            case 3: return [2 /*return*/, _c.sent()];
            case 4:
                _a = _c.sent();
                return [2 /*return*/, {
                        success: false,
                        error: "Could not connect with API or bad response.",
                    }];
            case 5: return [3 /*break*/, 10];
            case 6:
                _c.trys.push([6, 9, , 10]);
                return [4 /*yield*/, (0, node_fetch_1.default)("".concat(url, "/api/news/").concat(lang, "/").concat(country, "/").concat(topic || "ALL"))];
            case 7:
                result = _c.sent();
                return [4 /*yield*/, result.json()];
            case 8: return [2 /*return*/, _c.sent()];
            case 9:
                _b = _c.sent();
                return [2 /*return*/, {
                        success: false,
                        error: "Could not connect with API or bad response.",
                    }];
            case 10: return [2 /*return*/];
        }
    });
}); };
function fetchNews(language, country, category, searchItem) {
    return __awaiter(this, void 0, void 0, function () {
        var news_data, news_paper, length_1, i, res, news, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getNews(language, country, category, searchItem)];
                case 1:
                    news_data = _b.sent();
                    news_paper = [];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 7, , 8]);
                    length_1 = news_data["data"].length;
                    i = 0;
                    _b.label = 3;
                case 3:
                    if (!(i < length_1)) return [3 /*break*/, 6];
                    return [4 /*yield*/, axios_1.default.post("http://localhost:8000/api/extract/", {
                            url: news_data["data"][i]["url"],
                            language: language.toLowerCase(),
                        })];
                case 4:
                    res = _b.sent();
                    if (res.data === "error") {
                        return [3 /*break*/, 5];
                    }
                    news = {
                        title: news_data["data"][i]["title"],
                        url: res.data["url"],
                        summary: res.data["summary"],
                        image: res.data["image"],
                        keywords: res.data["keywords"],
                        published: res.data["published"],
                        author: res.data["author"],
                        country: country,
                        language: language,
                        category: category,
                        source: news_data["data"][i]["source"]["text"],
                    };
                    news_paper.push(news);
                    _b.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 8];
                case 7:
                    _a = _b.sent();
                    console.log("error");
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/, news_paper];
            }
        });
    });
}
function extractNews(cc, lc) {
    return __awaiter(this, void 0, void 0, function () {
        var i, element, res, res1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 9)) return [3 /*break*/, 5];
                    element = headlines[i];
                    return [4 /*yield*/, fetchNews(lc, cc, element, element)];
                case 2:
                    res = _a.sent();
                    news_model_1.default.insertMany(res)
                        .then(function (response) {
                        console.log(response);
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                    return [4 /*yield*/, fetchNews('en', cc, element, element)];
                case 3:
                    res1 = _a.sent();
                    news_model_1.default.insertMany(res1)
                        .then(function (response) {
                        console.log(response);
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function headline(cc, lc) {
    return __awaiter(this, void 0, void 0, function () {
        var res, res1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post("http://localhost:8000/api/headline/", {
                        language: lc,
                        country: cc,
                    })];
                case 1:
                    res = _a.sent();
                    news_model_1.default.insertMany(res.data)
                        .then(function (response) {
                        console.log(response);
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                    return [4 /*yield*/, axios_1.default.post("http://localhost:8000/api/headline/", {
                            language: 'en',
                            country: cc,
                        })];
                case 2:
                    res1 = _a.sent();
                    news_model_1.default.insertMany(res1.data)
                        .then(function (response) {
                        console.log(response);
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function ddgNews(cc) {
    return __awaiter(this, void 0, void 0, function () {
        var i, element, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 9)) return [3 /*break*/, 4];
                    element = headlines[i];
                    return [4 /*yield*/, axios_1.default.post("http://localhost:8000/api/ddgnews/", {
                            headline: element,
                            country: cc,
                        })];
                case 2:
                    res = _a.sent();
                    news_model_1.default.insertMany(res.data)
                        .then(function (response) {
                        console.log(response);
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function gNews(cc, lc) {
    return __awaiter(this, void 0, void 0, function () {
        var i, element, res, res1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 9)) return [3 /*break*/, 5];
                    element = headlines[i];
                    console.log(element, cc, lc);
                    return [4 /*yield*/, axios_1.default.post("http://localhost:8000/api/gnews/", {
                            language: lc,
                            country: [cc],
                            queries: [element]
                        })];
                case 2:
                    res = _a.sent();
                    news_model_1.default.insertMany(res.data)
                        .then(function (response) {
                        console.log(response);
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                    return [4 /*yield*/, axios_1.default.post("http://localhost:8000/api/gnews/", {
                            language: 'en',
                            country: [cc],
                            queries: [element]
                        })];
                case 3:
                    res1 = _a.sent();
                    news_model_1.default.insertMany(res1.data)
                        .then(function (response) {
                        console.log(response);
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        var i, content, lc, cc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 1)) return [3 /*break*/, 4];
                    content = countryLanguage[i]["country"];
                    console.log(content);
                    lc = countryLanguage[i]["languageCode"];
                    cc = countryLanguage[i]["countryCode"];
                   
                    return [4 /*yield*/, extractNews(cc, lc)
                        // await headline(cc, lc)
                        // await gNews(cc, lc)
                        // await ddgNews(cc)
                    ];
                case 2:
                    _a.sent();
                    // await headline(cc, lc)
                    // await gNews(cc, lc)
                    // await ddgNews(cc)
                    console.log("compeleted");
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.default = getData;
// py manage.py runserver....
//# sourceMappingURL=news.utils.js.map