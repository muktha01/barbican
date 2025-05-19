// controllers/swapController.js
import { Swap, Product, Factory } from "../models/index.js";

// Create a Swap
export const createSwap = async (req, res) => {
  try {
    const { type, quantity, product_id, from_factory_id, to_factory_id } =
      req.body;

    // Validation
    if (
      !type ||
      !quantity ||
      !product_id ||
      !from_factory_id ||
      !to_factory_id
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create Swap
    const swap = await Swap.create({
      type,
      quantity,
      product_id,
      from_factory_id,
      to_factory_id,
    });

    return res.status(201).json({
      message: "Swap created successfully",
      swap,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

// Get all Swaps
export const getAllSwaps = async (req, res) => {
  try {
    const swaps = await Swap.findAll({
      include: [
        { model: Product },
        { model: Factory, as: "fromFactory" },
        { model: Factory, as: "toFactory" },
      ],
    });

    return res
      .status(200)
      .json({ message: "Swaps retrieved successfully", swaps });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

// Get Swap by ID
export const getSwapById = async (req, res) => {
  try {
    const { swapId } = req.params;

    const swap = await Swap.findByPk(swapId, {
      include: [
        { model: Product },
        { model: Factory, as: "fromFactory" },
        { model: Factory, as: "toFactory" },
      ],
    });

    if (!swap) {
      return res.status(404).json({ message: "Swap not found" });
    }

    return res
      .status(200)
      .json({ message: "Swap retrieved successfully", swap });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

// Update a Swap
export const updateSwap = async (req, res) => {
  try {
    const { swapId } = req.params;
    const { type, quantity, product_id, from_factory_id, to_factory_id } =
      req.body;

    const swap = await Swap.findByPk(swapId);

    if (!swap) {
      return res.status(404).json({ message: "Swap not found" });
    }

    // Update the swap
    await swap.update({
      type: type || swap.type,
      quantity: quantity || swap.quantity,
      product_id: product_id || swap.product_id,
      from_factory_id: from_factory_id || swap.from_factory_id,
      to_factory_id: to_factory_id || swap.to_factory_id,
    });

    return res.status(200).json({
      message: "Swap updated successfully",
      swap,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

// Delete a Swap
export const deleteSwap = async (req, res) => {
  try {
    const { swapId } = req.params;

    const swap = await Swap.findByPk(swapId);

    if (!swap) {
      return res.status(404).json({ message: "Swap not found" });
    }

    await swap.destroy();

    return res.status(200).json({ message: "Swap deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};
