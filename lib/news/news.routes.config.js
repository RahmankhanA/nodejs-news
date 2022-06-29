"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsRoutes = void 0;
var common_routes_config_1 = require("../common/common.routes.config");
var news_controller_1 = __importDefault(require("./controllers/news.controller"));
var news_middleware_1 = __importDefault(require("./middleware/news.middleware"));
var NewsRoutes = /** @class */ (function (_super) {
    __extends(NewsRoutes, _super);
    function NewsRoutes(app) {
        return _super.call(this, app, 'UsersRoutes') || this;
    }
    NewsRoutes.prototype.configureRoutes = function () {
        this.app.route("/singleNews")
            .post(news_controller_1.default.SingleNews);
        this.app.route("/news")
            .post(news_controller_1.default.listNews);
        // .post(
        //     // ValidateJoi(Schemas.user.create),
        //     // UsersMiddleware.validateRequiredUserBodyFields,
        //     NewsController.createNews);
        this.app.param("searchQuery", news_middleware_1.default.extractSearchQuery);
        this.app.route("/news/:searchQuery")
            .post(news_controller_1.default.searchByQuery);
        //     .all(UsersMiddleware.validateUserExists)
        //     .delete(UsersController.removeUser);
        // this.app.put(`/users/:userId`,[
        //     // ValidateJoi(Schemas.user.update),
        //     UsersMiddleware.validateRequiredUserBodyFields,
        //     UsersMiddleware.validateSameEmailBelongToSameUser,
        //     UsersController.put
        // ]);
        // this.app.patch(`/users/:userId`, [
        //     UsersMiddleware.validatePatchEmail,
        //     UsersController.patch
        // ]);
        // this.app.post(`/users/login`, [
        //     UsersController.login
        // ]);
        return this.app;
    };
    return NewsRoutes;
}(common_routes_config_1.CommonRoutesConfig));
exports.NewsRoutes = NewsRoutes;
//# sourceMappingURL=news.routes.config.js.map