import express from "express"
import {create_student} from "../controllers/student.js"
import { get_students,onestudent,deletestudent,updatestudent} from "../controllers/student.js"; 
const router=express.Router();

router.post("/signup",create_student);
router.get("/getall",get_students);
router.get("/onestd/:id",onestudent);
router.delete("/del/:id",deletestudent);
router.put("/update/:id",updatestudent);
export default router;