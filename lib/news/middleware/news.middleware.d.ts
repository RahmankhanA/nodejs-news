import express from 'express';
declare class UsersMiddleware {
    private static instance;
    static getInstance(): UsersMiddleware;
    validateRequiredUserBodyFields(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void>;
    extractSearchQuery(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void>;
}
declare const _default: UsersMiddleware;
export default _default;
