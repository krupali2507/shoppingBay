import { productService } from "../services/index.js";

const createProduct = async (productInfo) => {
  try {
    const productData = await productService.createProduct(productInfo);
    return productData;
  } catch (error) {
    throw error;
  }
};

const getProductsByCategory = async (type) => {
  try {
    const productData = await productService.productsByCategory({ type });
    return productData;
  } catch (error) {
    throw error;
  }
};

const getProductsById = async (id) => {
  try {
    const productData = await productService.getProductById({ _id: id });
    return productData;
  } catch (error) {
    throw error;
  }
};

export default { createProduct, getProductsByCategory, getProductsById };
