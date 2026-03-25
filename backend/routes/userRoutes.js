import { Router } from "express";
import { saveUser } from "../controllers/userControllers";

const router = Router();
router.post('/', saveUser);
export default router;
