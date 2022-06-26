import { Request, Response, NextFunction} from 'express';

export function errorLogger(err: Error, req: Request, res: Response, next: NextFunction) {
    if (res.statusCode === 500) {
        console.error(err.stack);
    }
}

export function errorResponder(err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500);
    if (err.message === 'Login Failed: User not found') res.status(404);
    if (err.message === 'Login Failed: Password is incorrect') res.status(401);
    res.send(err.message);
    next(err)
}

