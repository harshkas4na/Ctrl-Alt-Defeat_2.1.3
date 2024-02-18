import { NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express';


const secret_key_seller: (string | undefined) = process.env.secret_key_user || 'IwillsettleForthis02';

export const jwtVerificationSeller = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.header('authorization');
        if (authHeader) {
            const Token = authHeader.split(' ')[1];
            jwt.verify(Token, secret_key_seller, (err, user) => {
                if (err) throw res.sendStatus(401);
                next();
            })
        }
        else {
            res.status(401).json({ message: 'Token authentication failed' });
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}