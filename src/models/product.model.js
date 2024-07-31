import mongoose, { Schema } from "mongoose";

const productSchema = Schema(
  {
    name: { type: String, required: true },
    desc: { type: String },
    banner: { type: String },
    type: { type: String, required: true },
    unit: { type: Number, required: true },
    price: { type: Number, required: true },
    available: { type: Boolean, required: true },
    suplier: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const Product = mongoose.model("Product", productSchema);

export default Product;
