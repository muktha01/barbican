import express from "express";
import {
  createSwap,
  getAllSwaps,
  getSwapById,
  updateSwap,
  deleteSwap,
} from "../controllers/swapController.js";

const router = express.Router();

router.route("/").get(getAllSwaps).post(createSwap);

router.route("/:swapId").get(getSwapById).patch(updateSwap).delete(deleteSwap);

export default router;
