import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/password.handle";

const registerUser = async ({ email, password, name }: User) => {
  const chekIs = await UserModel.findOne({ email });
  if (chekIs) return "User already exists";

  const passwordHash = await encrypt(password);
  const registerUser = await UserModel.create({
    email,
    password: passwordHash,
    name,
  });

  return registerUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "The credentials are invalid";

  const checkPassword = checkIs.password;
  const isCorrect = await verified(password, checkPassword);

  if (!isCorrect) return "Password incorrect";

  return checkIs;
};

export { registerUser, loginUser };
