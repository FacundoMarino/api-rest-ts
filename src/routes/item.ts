import { Router } from "express";
import {
  getItem,
  getItems,
  updateItem,
  postItem,
  deleteItem,
} from "../controllers/item";

const router = Router();

router.get("/:id", getItem);

router.get("/", getItems);

router.put("/:id", updateItem);

router.post("/", postItem);

router.delete("/:id", deleteItem);

export { router };
