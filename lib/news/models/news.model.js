"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsSchema = void 0;
var mongoose_1 = __importStar(require("mongoose"));
exports.NewsSchema = new mongoose_1.Schema({
    country: {
        type: String,
    },
    language: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
    },
    source: {
        type: String,
    },
    title: {
        type: String,
    },
    summary: {
        type: String,
    },
    image: {
        type: String,
    },
    url: {
        type: String,
    },
    published: {
        type: String,
    },
    author: [{
            type: String,
        }],
    "keywords": [
        {
            type: String,
        }
    ],
}, {
    timestamps: true,
    versionKey: false
});
/**
 *  Here we are creating and setting an id property and
    removing _id, __v, and the password hash which we do not need
    to send back to the client.
 */
exports.NewsSchema.set("toJSON", {
    transform: function (document, returnedObject) {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.createdAt;
        delete returnedObject.updatedAt;
    },
});
exports.default = mongoose_1.default.model('News', exports.NewsSchema);
//# sourceMappingURL=news.model.js.map