import student from "../models/student.js"


export const create_student=async(req,res,next)=>{
  
    try{
      const {name,email}=await req.body;
        const newstudent=new student({name:name,email:email})
        await newstudent.save();
        return res.status(200).send("student applied successfully")
    }
    catch(err){
    //  return res.send({"msg":err.msg});
    console.log(err)
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

      export const onestudent=async(req,res)=>{
        try{
           const{id}=req.params;
          
           const std=await student.findOne({_id:id});
           if(!std){
            return res.status(400).json({msg:"not available"})
           }
           return res.status(200).json(std);
        }catch(err){
          return res.send({"msg":err.msg})
        }
      }

      export const deletestudent=async(req,res)=>{
        try{
          const{id}=req.params;
          
          const std=await student.findOne({_id:id});
          if(!std){
           return res.status(400).json({msg:"not available"})
          }
          await student.findByIdAndDelete(req.params.id);
          return res.status(200).json({msg:"successfully deleted"});
        }catch(err){
          return res.send({"msg":err.msg})
        }
      }

      export const updatestudent=async(req,res)=>{
        try{
            const{id}=req.params;
            const std=await student.findOne({_id:id})
            if(!std){
                return res.status(500).json({msg:"student not found!"})
            }
            await student.findByIdAndUpdate({_id:id},{$set: req.body},{new:true});
            return res.status(200).json({msg:"successfully updated"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
       }