import { Request, Response } from "express";
import User from "../models/user.model";
import getErrorMsg from "./getErrorMsg";

export async function addUser(req: Request, res: Response) {
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.send({ message: "User added successfully" });
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    res.status(400).send({ message: errorMsg });
  }
}

export async function loginUser(req: Request, res: Response) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (user.password === req.body.password) {
        res.send({ message: "User logged in successfully" });
      } else {
        res.status(400).send({ message: "Password is incorrect" });
      }
    } else {
      res.status(400).send({ message: "User not found" });
    }
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    res.status(400).send({ message: errorMsg });
  }
}
