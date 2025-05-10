import { Supplier } from "../models/index.js";

export const createSupplier = async (req, res) => {
  try {
    const {
      supplier_name,
      company_name,
      gst_number,
      mobile_number,
      type,
      module,
    } = req.body;

    if (
      !supplier_name ||
      !company_name ||
      !gst_number ||
      !mobile_number ||
      !type ||
      !module
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingSupplier = await Supplier.findOne({
      where: { supplier_name },
    });
    if (existingSupplier) {
      return res
        .status(409)
        .json({ message: "Supplier with this name already exists." });
    }

    const supplier = await Supplier.create({
      supplier_name,
      company_name,
      gst_number,
      mobile_number,
      type,
      module,
    });

    return res
      .status(201)
      .json({ message: "Supplier created successfully.", supplier });
  } catch (error) {
    console.error("Error creating supplier:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Get all suppliers
export const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.findAll({
      order: [["createdAt", "DESC"]],
    });
    return res
      .status(200)
      .json({ message: "Suppliers retrieved successfully", suppliers });
  } catch (error) {
    console.error("Error fetching suppliers:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Get single supplier by ID
export const getSupplierById = async (req, res) => {
  try {
    const { supplierId } = req.params;

    const supplier = await Supplier.findByPk(supplierId);

    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found." });
    }

    return res
      .status(200)
      .json({ message: "Supplier retrieved successfully", supplier });
  } catch (error) {
    console.error("Error fetching supplier:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Update a supplier
export const updateSupplier = async (req, res) => {
  try {
    const { supplierId } = req.params;
    const {
      supplier_name,
      company_name,
      gst_number,
      mobile_number,
      type,
      module,
    } = req.body;

    const supplier = await Supplier.findByPk(supplierId);

    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found." });
    }

    await supplier.update({
      supplier_name: supplier_name || supplier.supplier_name,
      company_name: company_name || supplier.company_name,
      gst_number: gst_number || supplier.gst_number,
      mobile_number: mobile_number || supplier.mobile_number,
      type: type || supplier.type,
      module: module || supplier.module,
    });

    return res
      .status(200)
      .json({ message: "Supplier updated successfully.", supplier });
  } catch (error) {
    console.error("Error updating supplier:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Delete a supplier
export const deleteSupplier = async (req, res) => {
  try {
    const { supplierId } = req.params;

    const supplier = await Supplier.findByPk(supplierId);

    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found." });
    }

    await supplier.destroy();

    return res.status(200).json({ message: "Supplier deleted successfully." });
  } catch (error) {
    console.error("Error deleting supplier:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
