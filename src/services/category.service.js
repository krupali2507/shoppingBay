import { categoryModel } from "../models/index.js";

const createCategory = async (categoryInfo) => {
  console.log("🚀 ~ createCategory ~ categoryInfo:", categoryInfo);
  const categoryRef = new categoryModel(categoryInfo);
  const categoryData = await categoryRef.save();
  console.log("🚀 ~ createCategory ~ categoryData:", categoryData);
  return categoryData;
};

const getCategories = async (filter) => {
  const categoryData = await categoryModel.find(filter);
  return categoryData;
};

export default { createCategory, getCategories };
