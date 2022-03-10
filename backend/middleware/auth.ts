import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import getErrorMsg from "../controllers/getErrorMsg";

declare global {
  namespace Express {
    interface Request {
      user?: {
        name: string;
        email: string;
        id: string;
      };
    }
  }
}
interface tokenObject {
  name: string;
  email: string;
  id: string;
}

function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.get("Authorization")?.split(" ")[1];
  if (!token)
    return res.status(401).send({ error: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(
      token,
      `${process.env.JWT_SECRET}`
    ) as tokenObject;
    req.user = { name: decoded.name, email: decoded.email, id: decoded.id };
    next();
  } catch (error) {
    res.status(401).send({ error: getErrorMsg(error) });
  }
}

export default auth;
