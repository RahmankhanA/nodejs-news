import express, { NextFunction } from 'express';
declare class UsersController {
    private static instance;
    static getInstance(): UsersController;
    listUsers(req: express.Request, res: express.Response): Promise<void>;
    getUserById(req: express.Request, res: express.Response): Promise<void>;
    createUser(req: express.Request, res: express.Response, next: NextFunction): Promise<void>;
    login(req: express.Request, res: express.Response, next: NextFunction): Promise<void>;
    patch(req: express.Request, res: express.Response, next: NextFunction): Promise<void>;
    put(req: express.Request, res: express.Response, next: NextFunction): Promise<void>;
    removeUser(req: express.Request, res: express.Response): Promise<void>;
}
declare const _default: UsersController;
export default _default;
