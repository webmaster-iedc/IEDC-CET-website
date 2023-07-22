import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  domains: {
    type: [String],
    required: true,
  },
});

const Form = mongoose.model("InnovateX Workshop", formSchema);
export default Form;
