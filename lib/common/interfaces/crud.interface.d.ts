import { NextFunction } from "express";
export interface CRUD {
    create: (resource: any, callback: (err: any, result: any) => NextFunction) => Promise<any>;
}
