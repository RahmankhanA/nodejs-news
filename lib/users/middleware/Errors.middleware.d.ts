import { Request, Response } from 'express';
declare function errorHandler(err: {
    name: string;
    message: any;
}, req: Request, res: Response): Response<any, Record<string, any>>;
export { errorHandler, };
