import { Request, Response } from "express";
import User from "../models/user.model";

export function checkToken(req: Request, res: Response) {
  if (!req.user) throw new Error("No user found");

  res.status(200).send(req.user);
}
