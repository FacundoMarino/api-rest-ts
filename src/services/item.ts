import { Manga } from "../interfaces/manga.interface";
import ItemModel from "../models/item";

const insertManga = async (item: Manga) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getMangas = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getManga = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

const updateManga = async (id: string, data: Manga) => {
  const responseItem = await ItemModel.findOne({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteManga = async (id: string) => {
  const responseItem = await ItemModel.remove({ _id: id });
  return responseItem;
};

export { insertManga, getMangas, getManga, updateManga, deleteManga };
