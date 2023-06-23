import { Schema, model, models } from "mongoose";

const StudentSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
  },
  grade: {
    type: String,
    required: [true, "Grade is required"],
  },
  images: {type:[String]},
 
}, {timestamps: true});

const Student = models.Student || model("Student", StudentSchema);

export default Student;