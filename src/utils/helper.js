import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { APP_SECRET } from "../../secret_cred.js";

const hashPassword = async (passowrd) => {
  try {
    const hashedPwd = bcrypt.hash(passowrd, 10);
    return hashedPwd;
  } catch (error) {
    throw error;
  }
};

const validatePassword = async (password, matchPassword) => {
  try {
    const isPasswordValid = await bcrypt.compare(password, matchPassword);
    return isPasswordValid;
  } catch (error) {
    throw error;
  }
};

const generateSignature = async (payload) => {
  try {
    const token = jwt.sign(payload, APP_SECRET, { expiresIn: "30d" });
    return token;
  } catch (error) {
    throw error;
  }
};

const validateSignatute = async (token) => {
  try {
    return jwt.verify(token, APP_SECRET);
  } catch (error) {
    throw error;
  }
};

export default {
  hashPassword,
  validatePassword,
  generateSignature,
  validateSignatute,
};
