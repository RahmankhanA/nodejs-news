import express, { NextFunction } from 'express';
declare class NewsController {
    private static instance;
    static getInstance(): NewsController;
    createNews(req: express.Request, res: express.Response, next: NextFunction): Promise<void>;
    listNews(req: express.Request, res: express.Response, next: NextFunction): Promise<void>;
    SingleNews(req: express.Request, res: express.Response, next: NextFunction): Promise<void>;
    searchByQuery(req: express.Request, res: express.Response, next: NextFunction): Promise<void>;
}
declare const _default: NewsController;
export default _default;
