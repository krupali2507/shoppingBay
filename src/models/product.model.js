import mongoose, { Schema } from "mongoose";

const productSchema = Schema({}, { timestamps: true, versionKey: false });
const Product = mongoose.model("Product", productSchema);

export default Product;
