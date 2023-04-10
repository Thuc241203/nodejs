import express from "express";
import { create, get, getAll, remove, update } from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();

router.get("/categories/:id", get);
router.get("/categories", getAll);
router.post("/categories", checkPermission, create);
router.put("/categories", checkPermission, update);
router.delete("/categories", checkPermission, remove);

export default router;
