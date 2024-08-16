import { customerService, productService } from "../services/index.js";

const createProduct = async (productInfo) => {
  try {
    const productData = await productService.createProduct(productInfo);
    return productData;
  } catch (error) {
    throw error;
  }
};

const getProductsByCategory = async (id) => {
  try {
    const productData = await productService.productsByCategory({ type: id });
    return productData;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const productData = await productService.getProductById({ _id: id });
    return productData;
  } catch (error) {
    throw error;
  }
};

const getproductsById = async (ids) => {
  try {
    const productData = await productService.getproducts({ _id: { $in: ids } });
    return productData;
  } catch (error) {
    throw error;
  }
};

const addToWishList = async (userId, productId) => {
  try {
    const productData = await productService.getProductById({ _id: productId });
    console.log("🚀 ~ addToWishList ~ productData:", productData);
    if (!productData) throw new Error("No such Product found!");
    return await customerService.findCustomerandUpdate(
      { _id: userId },
      { $addToSet: { wishlist: productId } },
      "-password -createdAt -updatedAt -cart -email -orders -address -phone"
    );
  } catch (error) {
    throw error;
  }
};

const removeFromWishList = async (userId, productId) => {
  try {
    const productData = await productService.getProductById({ _id: productId });
    console.log("🚀 ~ addToWishList ~ productData:", productData);
    if (!productData) throw new Error("No such Product found!");
    return await customerService.findCustomerandUpdate(
      { _id: userId },
      { $pull: { wishlist: productId } },
      "-password -createdAt -updatedAt -cart -email -orders -address -phone"
    );
  } catch (error) {
    throw error;
  }
};

const manageCart = async (userId, productId, qty, isAdd) => {
  try {
    const userData = await customerService.findById(
      { _id: userId },
      "-password -createdAt -updatedAt -email -orders -address -phone"
    );
    let currentUserCart = userData.cart;

    if (currentUserCart.length === 0) {
      if (isAdd) {
        currentUserCart.push({ product: productId, unit: qty });
      } else {
        throw new Error("Cart is Empty!");
      }
    } else {
      let productFound = false;
      currentUserCart = currentUserCart.map((eachItem) => {
        if (eachItem.product.toString() === productId.toString()) {
          productFound = true;
          if (isAdd) {
            return { ...eachItem, unit: qty };
          } else {
            return null;
          }
        }
        return eachItem;
      });

      if (!productFound && isAdd) {
        currentUserCart.push({ product: productId, unit: qty });
      }

      if (!productFound && !isAdd) {
        throw new Error("No such Procudt found in cart to remove!");
      }
    }
    currentUserCart = currentUserCart.filter((eachItem) => eachItem);
    userData.cart = currentUserCart;
    const updatedCartData = await userData.save();
    return updatedCartData.cart;
  } catch (error) {
    throw error;
  }
};

const addToCart = async (userId, cartData) => {
  console.log("🚀 ~ addToCart ~ cartData:", cartData);
  try {
    const productData = await productService.getProductById({
      _id: cartData._id,
    });
    if (!productData) throw new Error("No such Product found!");
    //Can check duplicate products in cart and just increase it's quantity
    return await manageCart(userId, cartData._id, cartData.qty, true);
  } catch (error) {
    throw error;
  }
};

const removeFromCart = async (userId, productId) => {
  try {
    const productData = await productService.getProductById({ _id: productId });
    if (!productData) throw new Error("No such Product found!");
    return await manageCart(userId, productId, 0, false);
  } catch (error) {
    throw error;
  }
};

export default {
  createProduct,
  getProductsByCategory,
  getProductById,
  getproductsById,
  addToWishList,
  removeFromWishList,
  addToCart,
  removeFromCart,
};
