"use strict";
/**
 * Required External Modules
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var bodyparser = __importStar(require("body-parser"));
var winston = __importStar(require("winston"));
var expressWinston = __importStar(require("express-winston"));
var dotenv = __importStar(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var users_routes_config_1 = require("./users/users.routes.config");
var news_routes_config_1 = require("./news/news.routes.config");
var debug_1 = __importDefault(require("debug"));
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = require("./config/config");
dotenv.config();
/**
 * job scheduling using cron
 */
// var i=1
// cron.schedule('*/5 * * * * *', () => {
//     // getData();
//    console.log(i++);
//  });
/**
 * connecting to the mongodb
 */
/** Connect to Mongo */
mongoose_1.default.Promise = global.Promise;
mongoose_1.default
    .connect(config_1.config.mongo.url, { retryWrites: true, w: "majority" })
    .then(function () {
    console.info("Mongo connected successfully.");
    // getData()
})
    .catch(function (error) { return console.error(error); });
/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}
var app = (0, express_1.default)();
var server = http.createServer(app);
var port = parseInt(process.env.PORT, 10);
var routes = [];
var debugLog = (0, debug_1.default)("app");
/**
 *  App Configuration
 */
app.use((0, helmet_1.default)());
//  app.use(express.json());
// here we are adding middleware to parse all incoming requests as JSON
app.use(bodyparser.json());
// here we are adding middleware to allow cross-origin requests
app.use((0, cors_1.default)());
// here we are configuring the expressWinston logging middleware,
// which will automatically log all HTTP requests handled by Express.js
app.use(expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
}));
// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
routes.push(new users_routes_config_1.UsersRoutes(app));
routes.push(new news_routes_config_1.NewsRoutes(app));
// here we are configuring the expressWinston error-logging middleware,
// which doesn't *handle* errors per se, but does *log* them
app.use(expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
}));
// this is a simple route to make sure everything is working properly
/**
 * Routes
 */
app.get("/", function (req, res) {
    res.status(200).send("Server up and running!");
});
/**
 * Server Activation
 */
server.listen(port, function () {
    debugLog("Server running at http://localhost:".concat(port));
    routes.forEach(function (route) {
        debugLog("Routes configured for ".concat(route.getName()));
    });
});
// getData()
//# sourceMappingURL=app.js.map