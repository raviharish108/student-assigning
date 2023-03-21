import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
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
    students_count: {
        type: Number,
        default: 0,
      },
      students: {
        type:[String],
      },
  },
  { timestamps: true }
);

export default mongoose.model("Mentor",mentorSchema);