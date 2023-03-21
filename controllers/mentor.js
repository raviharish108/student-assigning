import Mentor from "../models/mentor.js"
import Student from "../models/student.js"
export const create_mentor=async(req,res,next)=>{
    try{
        const newmentor=new Mentor({...req.body})
        await newmentor.save();
        res.status(200).send("mentor created successfully")
    }
    catch(err){
      return res.send({"msg":err.msg});
    }     
    }

   
   
  export const asignstudent=async(req,res)=>{
    try{
      const mentor = await Mentor.findById(req.params.id);
      const student = await Student.findById(req.body.studentid);
  if(!mentor){
    return res.status(400).send({msg:"mentor not available"})
  }
  if(!student){
    return res.status(400).send({msg:"student not available"})
  }
  if(student.mentor===req.params.id){
    return res.status(400).send({msg:"this student already assigned a student"})
  }
  await Mentor.findByIdAndUpdate(req.params.id, {
    $push: { students: req.body.studentid },$inc: { students_count: mentor.students_count+1 }
  });
  await Student.findByIdAndUpdate(req.body.studentid, {
    $set: { mentor: req.params.id},
  });
  res.status(200).json("students added successfully.")
    }catch(err){
       return res.status(400).send({msg:err.message})
    }
  }

  export const updatestudent=async(req,res)=>{
    try{
      const mentor = await Mentor.findById(req.params.id);
      const student = await Student.findById(req.body.studentid);
  if(!mentor){
    return res.status(400).send({msg:"mentor not available"})
  }
  if(!student){
    return res.status(400).send({msg:"student not available"})
  }
 
  await Mentor.findByIdAndUpdate(student.mentor, {
    $pull: { students: req.body.studentid },$inc: { students_count: mentor.students_count-1 }
  });
  await Mentor.findByIdAndUpdate(req.params.id, {
    $push: { students: req.body.studentid },$inc: { students_count: mentor.students_count+1 }
  });
  await Student.findByIdAndUpdate(req.body.studentid, {
    $set: { mentor: req.params.id},
  });
  res.status(200).json("students updated successfully.")
    }catch(err){
       return res.status(400).send({msg:err.message})
    }
  }
  
  export const getallstudentforparticularmentor=async(req,res)=>{
    try{
           const mentor = await Mentor.findById(req.params.id);
           if(!mentor){
            return res.status(400).send({msg:"mentor is not available"})
           }
           return  res.status(200).send(mentor.students);
          }
    catch(err){
      res.status(400).send({msg:err.message})
    }
  }
  export const recently_update=async(req,res)=>{
    try{
         const recently_update= await Mentor.find().sort({updatedAt: -1 }).limit(5);
         return  res.status(200).send(recently_update);
    }
    catch(err){
      res.status(400).send({msg:err.message})
    }
  }