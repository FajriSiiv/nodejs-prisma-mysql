import express from "express";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProduct,
} from "../controller/product.js";
import { Login, Logout, Register } from "../controller/user.js";
import { isLoggedIn } from "../middleware/auth.js";
const router = express.Router();

// user
router.post("/v1/api/register", Register);
router.post("/v1/api/login", Login);
router.get("/v1/api/logout", isLoggedIn, Logout);

// product
router.get("/v1/api/product", isLoggedIn, getProduct);
router.post("/v1/api/product", createProduct);
router.patch("/v1/api/product/:id", editProduct);
router.delete("/v1/api/product/:id", deleteProduct);

export default router;
