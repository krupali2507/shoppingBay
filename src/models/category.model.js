import mongoose, { Schema } from "mongoose";

const categorySchema = Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const Category = mongoose.model("Category", categorySchema);

export default Category;
