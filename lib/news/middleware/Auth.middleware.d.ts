import { Request, Response, NextFunction } from 'express';
declare function authenticateToken(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
declare function generateAccessToken(email: string): string;
export { authenticateToken, generateAccessToken };
