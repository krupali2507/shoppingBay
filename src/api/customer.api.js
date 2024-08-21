import { customercontroller } from "../controllers/index.js";
import { responseWrapper } from "../utils/index.js";

const signup = async (req, res) => {
  try {
    const { email, password, phone } = req.body;
    const data = await customercontroller.signup({
      email,
      password,
      phone,
    });

    res
      .status(200)
      .send(
        responseWrapper.customResponse("User registered successfully!", data)
      );
  } catch (error) {
    res.status(400).send(responseWrapper.customError(error));
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await customercontroller.login({
      email,
      password,
    });

    res
      .status(200)
      .send(responseWrapper.customResponse("User Login successfully!", data));
  } catch (error) {
    res.status(400).send(responseWrapper.customError(error));
  }
};

const getProfile = async (req, res) => {
  try {
    const data = await customercontroller.getProfileData(req.currentUser._id);
    res
      .status(200)
      .send(
        responseWrapper.customResponse(
          "Profile Data Fetched successfully!",
          data
        )
      );
  } catch (error) {
    res.status(400).send(responseWrapper.customError(error));
  }
};

const getShopingDetails = async (req, res) => {
  try {
    const { _id } = req.currentUser;
    const data = await customercontroller.getShopingDetails({ _id });
    res
      .status(200)
      .send(
        responseWrapper.customResponse(
          "Profile Data Fetched successfully!",
          data
        )
      );
  } catch (error) {
    res.status(400).send(responseWrapper.customError(error));
  }
};

const addNewAddress = async (req, res) => {
  try {
    const address = req.body;
    const userId = req.currentUser._id;
    const data = await customercontroller.addNewAddress(
      { _id: userId },
      address
    );
    res
      .status(200)
      .send(
        responseWrapper.customResponse("Address added successfully!", data)
      );
  } catch (error) {
    res.status(400).send(responseWrapper.customError(error));
  }
};

const getWishList = async (req, res) => {
  try {
    const userId = req.currentUser._id;
    const data = await customercontroller.getWishList({ _id: userId });
    res
      .status(200)
      .send(
        responseWrapper.customResponse(
          "Profile Data Fetched successfully!",
          data
        )
      );
  } catch (error) {
    res.status(400).send(responseWrapper.customError(error));
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
