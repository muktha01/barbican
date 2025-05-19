import { Usage, Product, Factory } from "../models/index.js";

// Create usage
export const createUsage = async (req, res) => {
  try {
    const { type, quantity, product_id, factory_id } = req.body;

    if (!type || quantity === undefined || !product_id || !factory_id) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const product = await Product.findByPk(product_id);

    if (!product)
      return res.status(404).json({ message: "Product not found." });

    const factory = await Factory.findByPk(factory_id);

    if (!factory)
      return res.status(404).json({ message: "Factory not found." });

    const usage = await Usage.create({
      type,
      quantity,
      product_id,
      factory_id,
    });

    return res
      .status(201)
      .json({ message: "Usage entry created successfully.", usage });
  } catch (error) {
    console.error("Error creating usage:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Get all usage records
export const getAllUsages = async (req, res) => {
  try {
    const usages = await Usage.findAll({
      include: [
        { model: Product, attributes: ["product_name"] },
        { model: Factory, attributes: ["factory_name"] },
      ],
      order: [["createdAt", "DESC"]],
    });

    return res
      .status(200)
      .json({ message: "Usages retrieved successfully", usages });
  } catch (error) {
    console.error("Error fetching usages:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Get usage by ID
export const getUsageById = async (req, res) => {
  try {
    const { usageId } = req.params;

    const usage = await Usage.findByPk(usageId, {
      include: [
        { model: Product, attributes: ["product_name"] },
        { model: Factory, attributes: ["factory_name"] },
      ],
    });

    if (!usage)
      return res.status(404).json({ message: "Usage entry not found." });

    return res.status(200).json(usage);
  } catch (error) {
    console.error("Error fetching usage:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Update usage
export const updateUsage = async (req, res) => {
  try {
    const { usageId } = req.params;
    const { type, quantity, product_id, factory_id } = req.body;

    const usage = await Usage.findByPk(usageId);
    if (!usage)
      return res.status(404).json({ message: "Usage entry not found." });

    await usage.update({
      type: type || usage.type,
      quantity: quantity || usage.quantity,
      product_id: product_id || usage.product_id,
      factory_id: factory_id || usage.factory_id,
    });

    return res
      .status(200)
      .json({ message: "Usage updated successfully.", usage });
  } catch (error) {
    console.error("Error updating usage:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Delete usage
export const deleteUsage = async (req, res) => {
  try {
    const { usageId } = req.params;

    const usage = await Usage.findByPk(usageId);
    if (!usage)
      return res.status(404).json({ message: "Usage entry not found." });

    await usage.destroy();

    return res.status(200).json({ message: "Usage deleted successfully." });
  } catch (error) {
    console.error("Error deleting usage:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
