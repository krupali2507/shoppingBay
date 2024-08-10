import { productController } from "../controllers/index.js";
import { responseWrapper } from "../utils/index.js";

const createProduct = async (req, res) => {
  try {
    const productInfo = req.body;
    const productData = await productController.createProduct(productInfo);
    console.log("🚀 ~ createProduct ~ productData:", productData);
    res
      .status(200)
      .send(
        responseWrapper.customResponse(
          "Product created successfully!",
          productData
        )
      );
  } catch (error) {
    res.status(400).send(responseWrapper.customError(error));
  }
};

const productsByCategory = async (req, res) => {
  try {
    const type = req.params.type;
    console.log("🚀 ~ productsByCategory ~ type:", type);
    const productData = await productController.getProductsByCategory(type);
    res
      .status(200)
      .send(
        responseWrapper.customResponse(
          "Product fetched successfully!",
          productData
        )
      );
  } catch (error) {
    res.status(400).send(responseWrapper.customError(error));
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.query;
    console.log("🚀 ~ getProduct ~ id:", id);
    const productData = await productController.getProductsById(id);
    res
      .status(200)
      .send(
        responseWrapper.customResponse(
          "Product fetch successfully!",
          productData
        )
      );
  } catch (error) {
    res.status(400).send(responseWrapper.customError(error));
  }
};

const getProducts = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        responseWrapper.customResponse(
          "Products fetched successfully!",
          productData
        )
      );
  } catch (error) {
    res.status(400).send(responseWrapper.customError(error));
  }
};

export default { createProduct, productsByCategory, getProduct, getProducts };
