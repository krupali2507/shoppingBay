import { categoryService } from "../services/index.js";

const createCategory = async (categoryInfo) => {
  try {
    const categoryData = await categoryService.createCategory(categoryInfo);
    return categoryData;
  } catch (error) {
    throw error;
  }
};

const getCategories = async () => {
  try {
    const categoryData = await categoryService.getCategories({});
    return categoryData;
  } catch (error) {
    throw error;
  }
};

export default { createCategory, getCategories };
