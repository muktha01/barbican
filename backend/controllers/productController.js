import Factory from "../models/Factory.js";
import Product from "../models/Product.js";
// Create a new product
export const createProduct = async (req, res) => {
  try {
    const { product_name, opening_stock, factory_id, type, module } = req.body;

    if (
      !product_name ||
      opening_stock === undefined ||
      !factory_id ||
      !type ||
      !module
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const factory = await Factory.findByPk(factory_id);
    if (!factory) {
      return res.status(404).json({ message: "Factory not found." });
    }

    const existingProduct = await Product.findOne({ where: { product_name } });
    if (existingProduct) {
      return res
        .status(409)
        .json({ message: "Product with this name already exists." });
    }

    const product = await Product.create({
      product_name,
      opening_stock,
      factory_id,
      type,
      module,
    });

    return res
      .status(201)
      .json({ message: "Product created successfully.", product });
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Factory, attributes: ["factory_name"] }],
      order: [["createdAt", "DESC"]],
    });

    return res
      .status(200)
      .json({ message: "Products retrieved successfully", products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Get product by ID
export const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findByPk(productId, {
      include: [{ model: Factory, attributes: ["factory_name"] }],
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    return res
      .status(200)
      .json({ message: "Product retrieved successfully", product });
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { product_name, opening_stock, factory_id, type, module } = req.body;

    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    await product.update({
      product_name: product_name || product.product_name,
      opening_stock: opening_stock || product.opening_stock,
      factory_id: factory_id || product.factory_id,
      type: type || product.type,
      module: module || product.module,
    });

    return res
      .status(200)
      .json({ message: "Product updated successfully.", product });
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    await product.destroy();

    return res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
