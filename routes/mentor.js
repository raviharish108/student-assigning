import express from "express"
import {create_mentor} from "../controllers/mentor.js"
 import {asignstudent} from "../controllers/mentor.js"
 import { updatestudent } from "../controllers/mentor.js";
 import {getallstudentforparticularmentor} from "../controllers/mentor.js"
 import {recently_update} from "../controllers/mentor.js"
const router=express.Router();

router.post("/signup",create_mentor)
 router.put("/asign_student/:id",asignstudent)
 router.put("/update_student/:id",updatestudent)
 router.get("/mentorforstudents/:id",getallstudentforparticularmentor)
 router.get("/recentupdate",recently_update)
export default router;