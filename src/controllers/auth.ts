import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth";

const registerControl = async ({ body }: Request, res: Response) => {
  const responseUser = registerUser(body);
  res.send(responseUser);
};

const loginControl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;

  const responseUser = await loginUser({ email, password });

  if (responseUser === "Password incorrect") {
    res.status(4003);
    res.send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { registerControl, loginControl };
