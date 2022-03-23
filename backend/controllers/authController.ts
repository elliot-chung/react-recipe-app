import { Request, Response } from "express";

export function checkToken(req: Request, res: Response) {
  if (!req.user) return res.status(401).send("You are not logged in");

  res.status(200).send(req.user);
}
