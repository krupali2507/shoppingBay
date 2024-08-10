import { productModel } from "../models/index.js";

const createProduct = async (productInfo) => {
  console.log("🚀 ~ createProduct ~ productInfo:", productInfo);
  const productRef = new productModel(productInfo);
  const productData = await productRef.save();
  console.log("🚀 ~ createProduct ~ productData:", productData);
  return productData;
};

const productsByCategory = async (filter) => {
  console.log("🚀 ~ productsByCategory ~ filter:", filter);
  const products = await productModel.find(filter);
  console.log("🚀 ~ productsByCategory ~ products:", products);
  return products;
};

const getProductById = async (filter) => {
  console.log("🚀 ~ getProductById ~ filter:", filter);
  const productData = await productModel.findById(filter);
  console.log("🚀 ~ getProductById ~ productData:", productData);
  return productData;
};

export default { createProduct, productsByCategory, getProductById };