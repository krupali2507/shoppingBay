import { customerService } from "../services/index.js";
import { hashing } from "../utils/index.js";

const signup = async (userInputs) => {
  try {
    const { email, password, phone } = userInputs;
    const existingCustomer = await customerService.findOneCustomer({ email });
    if (existingCustomer)
      throw new Error("Account with same email already exists!");

    const hashPassword = await hashing.hashPassword(password);

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

    const validatePassword = await hashing.validatePassword(
      password,
      existingCustomer.password
    );
    if (!validatePassword) throw new Error("Password is not valid!");

    const token = await hashing.generateSignature({
      id: existingCustomer._id,
      email: existingCustomer.email,
    });
    return { id: existingCustomer._id, token };
  } catch (error) {
    throw error;
  }
};

const getProfile = async (userInputs) => {
  try {
  } catch (error) {
    throw error;
  }
};
const getShopingDetails = async (userInputs) => {
  try {
  } catch (error) {
    throw error;
  }
};
const addNewAddress = async (userInputs) => {
  try {
  } catch (error) {
    throw error;
  }
};
const getWishList = async (userInputs) => {
  try {
  } catch (error) {
    throw error;
  }
};

export default {
  signup,
  login,
  getProfile,
  getShopingDetails,
  addNewAddress,
  getWishList,
};
