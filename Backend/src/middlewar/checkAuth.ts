import type { NextFunction, Request, Response, RequestHandler } from "express";
import type { JwtPayload } from "jsonwebtoken";

import { SECRET } from "../config/env";
import { verifyToken } from "../utils/jwt";
import { ApiError } from "../error/apiError";


// CHECK AUTH MIDDLEWARE
export const checkAuth: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies?.authorization || req.headers?.authorization;

        if (!token) {
            throw new ApiError(403, "No token received!");
        };
        const verifiedToken = verifyToken(token, SECRET.JWT_ACCESS_SECRET) as JwtPayload;
        req.user = verifiedToken;
        next();
    } catch (error) {
        next(error);
    }
};