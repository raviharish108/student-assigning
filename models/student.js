import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  
    mentor: {
      type:String,
      default:"",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Student",studentSchema);