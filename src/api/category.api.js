import { categorycontroller } from "../controllers/index.js";
import { responseWrapper } from "../utils/index.js";

const createCategory = async (req, res) => {
  try {
    const categoryInfo = req.body;
    const categoryData = await categorycontroller.createCategory(categoryInfo);
    res
      .status(200)
      .send(
        responseWrapper.customResponse(
          "Category created successfully!",
          categoryData
        )
      );
  } catch (error) {
    res.status(400).send(responseWrapper.customError(error));
  }
};

const getCategories = async (req, res) => {
  try {
    const CategoryData = await categorycontroller.getCategories();
    res
      .status(200)
      .send(
        responseWrapper.customResponse(
          "Categories fetched successfully!",
          CategoryData
        )
      );
  } catch (error) {
    console.log("🚀 ~ getCategories ~ error:", error);
    res.status(400).send(responseWrapper.customError(error));
  }
};

const getCategory = async (req, res) => {
  try {
    const CategoryData = await categorycontroller.getCategories();
    res
      .status(200)
      .send(
        responseWrapper.customResponse(
          "Category fetched successfully!",
          CategoryData
        )
      );
  } catch (error) {
    console.log("🚀 ~ getCategories ~ error:", error);
    res.status(400).send(responseWrapper.customError(error));
  }
};

export default { createCategory, getCategories, getCategory };
