/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indizes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CRUD } from "../../common/interfaces/crud.interface";
import { IUser } from "../models/users.model";
declare class UsersService implements CRUD {
    private static instance;
    static getInstance(): UsersService;
    create(resource: IUser, callback: {
        (error: any, results: any): any;
        (arg0: {
            message: string;
        }, arg1: string): any;
    }): Promise<any>;
    deleteById(resourceId: string): Promise<(import("../models/users.model").UserModel & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    list(limit: number, page: number): Promise<(import("../models/users.model").UserModel & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    patchById(resource: any, callback: {
        (error: any, results: any): any;
        (arg0: {
            message: string;
        }, arg1: string): any;
    }): Promise<void>;
    readById(resourceId: string): Promise<(import("../models/users.model").UserModel & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    updateById(resource: any, callback: {
        (error: any, results: any): any;
        (arg0: {
            message: string;
        }, arg1: string): any;
    }): Promise<void>;
    login(resource: any, callback: (arg0: {
        message: string;
    } | null, arg1: any | null) => any): Promise<any>;
    getUserByEmail(email: string): Promise<(import("../models/users.model").UserModel & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
declare const _default: UsersService;
export default _default;
