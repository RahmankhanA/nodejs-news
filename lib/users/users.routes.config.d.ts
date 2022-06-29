import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
export declare class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application);
    configureRoutes(): express.Application;
}
