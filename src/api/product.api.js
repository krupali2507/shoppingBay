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
    const id = req.params.id;
    console.log("🚀 ~ productsByCategory ~ id:", id);
    const productData = await productController.getProductsByCategory(id);
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
    const productData = await productController.getProductById(id);
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
    const productData = await productController.getproductsById(req.body.ids);
    res
      .status(200)
      .send(
        responseWrapper.customResponse(
          "Products fetched successfully!",
          productData
        )
      );
  } catch (error) {
    console.log("🚀 ~ getProducts ~ error:", error);
    res.status(400).send(responseWrapper.customError(error));
  }
};

const addProductToWishList = async (req, res) => {
  try {
    const userId = req.currentUser._id,
      productId = req.body.id;
    const data = await productController.addToWishList(userId, productId);
    res
      .status(200)
      .send(
        responseWrapper.customResponse(
          "Products added to wishlist successfully!",
          data
        )
      );
  } catch (error) {
    console.log("🚀 ~ getProducts ~ error:", error);
    res.status(400).send(responseWrapper.customError(error));
  }
};

const removeProductFromWishList = async (req, res) => {
  try {
    const userId = req.currentUser._id,
      productId = req.params.id;
    const data = await productController.removeFromWishList(userId, productId);
    res
      .status(200)
      .send(
        responseWrapper.customResponse(
          "Products Removed From wishlist successfully!",
          data
        )
      );
  } catch (error) {
    console.log("🚀 ~ getProducts ~ error:", error);
    res.status(400).send(responseWrapper.customError(error));
  }
};

const addProductToCart = async (req, res) => {
  try {
    const userId = req.currentUser._id,
      carData = req.body;
    const data = await productController.addToCart(userId, carData);
    res
      .status(200)
      .send(
        responseWrapper.customResponse(
          "Products added to wishlist successfully!",
          data
        )
      );
  } catch (error) {
    console.log("🚀 ~ getProducts ~ error:", error);
    res.status(400).send(responseWrapper.customError(error));
  }
};

const removeProdcutFromCart = async (req, res) => {
  try {
    const userId = req.currentUser._id,
      productId = req.params.id;
    const data = await productController.removeFromCart(userId, productId);
    res
      .status(200)
      .send(
        responseWrapper.customResponse(
          "Products Removed From Cart successfully!",
          data
        )
      );
  } catch (error) {
    console.log("🚀 ~ getProducts ~ error:", error);
    res.status(400).send(responseWrapper.customError(error));
  }
};

export default {
  createProduct,
  productsByCategory,
  getProduct,
  getProducts,
  addProductToWishList,
  removeProductFromWishList,
  addProductToCart,
  removeProdcutFromCart,
};
