import Joi, { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";
import { IUser } from "../models/users.model";
export declare const ValidateJoi: (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const Schemas: {
    user: {
        create: Joi.ObjectSchema<IUser>;
        update: Joi.ObjectSchema<IUser>;
    };
};
