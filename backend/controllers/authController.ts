import { Request, Response } from "express";

export function checkToken(req: Request, res: Response) {
  if (req.user) {
    res.status(200).send(req.user);
  } else {
    res.status(401).send({
      message: "You are not logged in",
    });
  }
}
