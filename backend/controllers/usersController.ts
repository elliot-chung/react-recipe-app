import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import User from "../models/user.model";
import getErrorMsg from "./getErrorMsg";

export async function addUser(req: Request, res: Response) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      hashedPassword: hashedPassword,
    });
    res.send("User added successfully");
  } catch (error) {
    res.status(400).send({ error: getErrorMsg(error) });
  }
}

export async function loginUser(req: Request, res: Response) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("User not found");
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.hashedPassword
    );
    if (!isPasswordMatch) res.status(400).send("Password is incorrect");
    const token = jwt.sign(
      { name: user.name, email: user.email, id: user._id },
      `${process.env.JWT_SECRET}`,
      { expiresIn: "24h" }
    );
    res.send({ token: token });
  } catch (error) {
    const errorMsg = getErrorMsg(error);
    res.status(400).send(errorMsg);
  }
}
