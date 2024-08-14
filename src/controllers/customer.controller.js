import { customerService } from "../services/index.js";
import { helper } from "../utils/index.js";

const signup = async (userInputs) => {
  try {
    const { email, password, phone } = userInputs;
    const existingCustomer = await customerService.findOneCustomer({ email });
    if (existingCustomer)
      throw new Error("Account with same email already exists!");

    const hashPassword = await helper.hashPassword(password);

    const newUser = await customerService.createCustomer({
      email,
      password: hashPassword,
      phone,
    });
    return { id: newUser.id, email: newUser.email };
  } catch (error) {
    throw error;
  }
};

const login = async (userInputs) => {
  try {
    const { email, password } = userInputs;
    const existingCustomer = await customerService.findOneCustomer({ email });
    if (!existingCustomer)
      throw new Error(
        "Account with this email doesn't exists! Please try signing up first!"
      );

    const validatePassword = await helper.validatePassword(
      password,
      existingCustomer.password
    );
    if (!validatePassword) throw new Error("Password is not valid!");

    const token = await helper.generateSignature({
      id: existingCustomer._id,
      email: existingCustomer.email,
    });
    return { id: existingCustomer._id, token };
  } catch (error) {
    throw error;
  }
};

const getShopingDetails = async (userInputs) => {
  try {
    const shoppingData = customerService.findCustomerById(userInputs);
    return shoppingData;
  } catch (error) {
    throw error;
  }
};

const addNewAddress = async (filter, address) => {
  try {
    const newAddress = await customerService.createAddress(address);
    console.log("🚀 ~ addNewAddress ~ newAddress:", newAddress);

    const updatedAddress = await customerService.findCustomerandUpdate(filter, {
      $push: { address: newAddress._id },
    });
    return updatedAddress;
  } catch (error) {
    throw error;
  }
};
const getWishList = async (userInputs) => {
  try {
    return await customerService.findById(userInputs);
  } catch (error) {
    throw error;
  }
};

export default {
  signup,
  login,
  getShopingDetails,
  addNewAddress,
  getWishList,
};
