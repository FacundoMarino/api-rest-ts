import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    default: "Ingrese una descripción",
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = model("user", UserSchema);
export default UserModel;
