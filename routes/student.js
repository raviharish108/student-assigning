import express from "express"
import {create_student} from "../controllers/student.js"
import { get_students } from "../controllers/student.js"; 
const router=express.Router();

router.post("/signup",create_student);
router.get("/getall",get_students);

export default router;