import student from "../models/student.js"


export const create_student=async(req,res,next)=>{
    try{
        const newstudent=new student({...req.body})
        await newstudent.save();
        return res.status(200).send("student created successfully")
    }
    catch(err){
     return res.send({"msg":err.msg});
    }     
    }
    export const get_students=async(req,res)=>{
        try{
        const result=await student.find();
        return res.status(200).send(result);
        }catch(err){
          return res.send({"msg":err.msg})
        }
      }