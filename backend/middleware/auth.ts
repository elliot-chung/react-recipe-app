import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
interface tokenObject {
  name: string;
  email: string;
  id: string;
}

function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.get("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(
      token,
      `${process.env.JWT_SECRET}`
    ) as tokenObject;
    req.user = { name: decoded.name, email: decoded.email, id: decoded.id };
    next();
  } catch (error) {
    res.status(401).send("Invalid token");
  }
}

export default auth;
