import { Product, Factory, Supplier, PurchaseEntry } from "../models/index.js";
import moment from "moment";

// Create a new purchase entry
export const createPurchaseEntry = async (req, res) => {
  try {
    const {
      purchase_date,
      bill_no,
      quantity,
      module,
      type,
      supplier_id,
      product_id,
      factory_id,
    } = req.body;

    // Basic validation
    if (
      !purchase_date ||
      !bill_no ||
      !quantity ||
      !module ||
      !type ||
      !supplier_id ||
      !product_id ||
      !factory_id
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate and format the purchase_date
    const formattedDate = moment(purchase_date, "DD-MM-YYYY", true);

    if (!formattedDate.isValid()) {
      return res.status(400).json({ message: "Invalid purchase date format." });
    }

    // Format purchase_date to ISO format (YYYY-MM-DD) before saving
    const isoFormattedDate = formattedDate.format("YYYY-MM-DD");

    // Create the purchase entry
    const purchase = await PurchaseEntry.create({
      purchase_date: isoFormattedDate, // Save the formatted date
      bill_no,
      quantity,
      module,
      type,
      supplier_id,
      product_id,
      factory_id,
    });

    return res.status(201).json({
      message: "Purchase entry created successfully.",
      purchase,
    });
  } catch (error) {
    console.error("Error creating purchase entry:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Get all purchase entries
export const getAllPurchaseEntries = async (req, res) => {
  try {
    const purchases = await PurchaseEntry.findAll({
      include: [{ model: Product }, { model: Factory }, { model: Supplier }],
      order: [["createdAt", "DESC"]],
    });

    return res
      .status(200)
      .json({ message: "Purchase entries retrieved successfully", purchases });
  } catch (error) {
    console.error("Error fetching purchase entries:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Get single purchase entry by ID
export const getPurchaseEntryById = async (req, res) => {
  try {
    const { id } = req.params;

    const purchase = await PurchaseEntry.findByPk(id, {
      include: [{ model: Product }, { model: Factory }, { model: Supplier }],
    });

    if (!purchase) {
      return res.status(404).json({ message: "Purchase entry not found." });
    }

    return res
      .status(200)
      .json({ message: "Purchase entries retrieved successfully", purchase });
  } catch (error) {
    console.error("Error fetching purchase entry:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Update a purchase entry
export const updatePurchaseEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      purchase_date,
      bill_no,
      quantity,
      module,
      type,
      supplier_id,
      product_id,
      factory_id,
    } = req.body;

    const purchase = await PurchaseEntry.findByPk(id);

    if (!purchase) {
      return res.status(404).json({ message: "Purchase entry not found." });
    }

    // If purchase_date is provided, validate and format it
    let formattedDate = purchase.purchase_date;
    if (purchase_date) {
      // Validate and format the purchase_date
      const momentDate = moment(purchase_date, "DD-MM-YYYY", true);
      if (!momentDate.isValid()) {
        return res
          .status(400)
          .json({ message: "Invalid purchase date format." });
      }
      // Format purchase_date to ISO format (YYYY-MM-DD)
      formattedDate = momentDate.format("YYYY-MM-DD");
    }

    // Update the purchase entry with validated data
    await purchase.update({
      purchase_date: formattedDate,
      bill_no: bill_no || purchase.bill_no,
      quantity: quantity || purchase.quantity,
      module: module || purchase.module,
      type: type || purchase.type,
      supplier_id: supplier_id || purchase.supplier_id,
      product_id: product_id || purchase.product_id,
      factory_id: factory_id || purchase.factory_id,
    });

    return res.status(200).json({
      message: "Purchase entry updated successfully.",
      purchase,
    });
  } catch (error) {
    console.error("Error updating purchase entry:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Delete a purchase entry
export const deletePurchaseEntry = async (req, res) => {
  try {
    const { id } = req.params;

    const purchase = await PurchaseEntry.findByPk(id);

    if (!purchase) {
      return res.status(404).json({ message: "Purchase entry not found." });
    }

    await purchase.destroy();

    return res
      .status(200)
      .json({ message: "Purchase entry deleted successfully." });
  } catch (error) {
    console.error("Error deleting purchase entry:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
