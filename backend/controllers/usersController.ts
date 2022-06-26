import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";

export async function addUser(req: Request, res: Response, next: NextFunction) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      hashedPassword: hashedPassword,
    });
    res.send("User added successfully");
  } catch (error) {
    next(error);
  }
}

export async function loginUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error("Login Failed: User not found");
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.hashedPassword
    );
    if (!isPasswordMatch) throw new Error("Login Failed: Password is incorrect");
    const token = jwt.sign(
      { name: user.name, email: user.email, id: user._id },
      `${process.env.JWT_SECRET}`,
      { expiresIn: "24h" }
    );
    res.send({ token: token });
  } catch(error) {
    next(error)
  }
}
