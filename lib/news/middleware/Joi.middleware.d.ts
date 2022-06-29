import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { INews } from '../models/news.model';
export declare const ValidateJoi: (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const Schemas: {
    user: {
        create: Joi.ObjectSchema<INews>;
    };
};
