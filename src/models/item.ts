import { Schema, Types, model, Model } from "mongoose";
import { Manga } from "../interfaces/manga.interface";

const ItemSchema = new Schema<Manga>(
  {
    author: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
    },
    price: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model("items", ItemSchema);
export default ItemModel;
