import express from "express"; 
const router = express.Router();
import { getUserID1 } from "../controller/userController.js";

// The dynamic route must use a colon (:) to capture the ID.
router.get('/:id', getUserID1);

export default router;