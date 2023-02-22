import { Response, Request } from "express";
import {
  deleteManga,
  getManga,
  getMangas,
  insertManga,
  updateManga,
} from "../services/item";
import { handleHttp } from "../utils/error.handle";

const getItem = async ({ params }: Request, res: Response) => {
  const { id } = params;
  try {
    const response = await getManga(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getMangas();
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  const { id } = params;
  const response = await updateManga(id, body);
  res.send(response);
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = insertManga(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  const { id } = params;
  try {
    const response = await deleteManga(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
