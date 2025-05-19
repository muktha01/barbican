import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").post(createProduct).get(getAllProducts);

router
  .route("/:productId")
  .get(getProductById)
  .patch(updateProduct)
  .delete(deleteProduct);

export default router;
