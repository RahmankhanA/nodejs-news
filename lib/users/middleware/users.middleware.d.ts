import express from 'express';
declare class UsersMiddleware {
    private static instance;
    static getInstance(): UsersMiddleware;
    validateRequiredUserBodyFields(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void>;
    validateSameEmailDoesNotExist(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void>;
    validateSameEmailBelongToSameUser(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void>;
    validatePatchEmail(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void>;
    validateUserExists(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void>;
    extractUserId(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void>;
}
declare const _default: UsersMiddleware;
export default _default;
