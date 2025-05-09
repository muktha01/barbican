import React, { useState } from "react";
import { ChevronRight, FileText, Pencil, Trash } from "lucide-react";
import { PiFilmReelThin } from "react-icons/pi";

const ReelStockPurchaseTable = () => {
  const [formData, setFormData] = useState({
    purchaseDate: "",
    purchaseParty: "",
    billNo: "",
    productName: "",
    factory: "",
    qty: "",
    type: "",
  });

  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const suppliers = ["Supplier A", "Supplier B"];
  const factories = ["Feviquik Company A", "Feviquik Company B"];
  const productNames = ["Product A", "Product B"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setProducts([...products, formData]);
    setShowModal(false);
    setFormData({
      purchaseDate: "",
      purchaseParty: "",
      billNo: "",
      productName: "",
      factory: "",
      qty: "",
      type: "",
    });
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl h-full p-6 sm:p-10 border-md">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 py-4 bg-gray-50 border-b border-gray-200 gap-4">
        <div className="flex items-center text-sm text-gray-500 font-medium space-x-1">
          <span className="flex items-center space-x-1">
            <PiFilmReelThin className="w-5 h-5" />
            <span>Reel Stock</span>
          </span>
          <ChevronRight className="w-4 h-4" />
          <FileText className="w-4 h-4 text-black" />
          <span className="text-black font-semibold ml-1">Purchase</span>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
        >
          Create
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-white text-gray-500 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 font-medium">S.NO</th>
              <th className="px-6 py-3 font-medium">Purchase Date</th>
              <th className="px-6 py-3 font-medium">Purchase Party</th>
              <th className="px-6 py-3 font-medium">Bill No</th>
              <th className="px-6 py-3 font-medium">Product</th>
              <th className="px-6 py-3 font-medium">Factory</th>
              <th className="px-6 py-3 font-medium">Quantity (Kgs)</th>
              <th className="px-6 py-3 font-medium">Type</th>
              <th className="px-6 py-3 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {products.map((item, index) => (
              <tr key={index} className="border-b border-gray-100 transition">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{item.purchaseDate}</td>
                <td className="px-6 py-4">{item.purchaseParty}</td>
                <td className="px-6 py-4">{item.billNo}</td>
                <td className="px-6 py-4">{item.productName}</td>
                <td className="px-6 py-4">{item.factory}</td>
                <td className="px-6 py-4">{item.qty}</td>
                <td className="px-6 py-4">{item.type}</td>
                <td className="px-6 py-4 flex justify-center items-center gap-2">
                  <Pencil className="w-4 h-4 text-gray-700" />
                  <Trash className="w-4 h-4 text-red-600" />
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="9" className="px-6 py-4 text-center text-gray-400">
                  No products added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-6 mx-auto max-h-screen overflow-y-auto">
      
            <h2 className="text-2xl font-bold mb-6">Add Product Purchase</h2>

            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium">Purchase Date</label>
                <input
                  type="date"
                  name="purchaseDate"
                  value={formData.purchaseDate}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Purchase Party</label>
                <select
                  name="purchaseParty"
                  value={formData.purchaseParty}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  <option value="">Select Supplier</option>
                  {suppliers.map((supplier, index) => (
                    <option key={index} value={supplier}>
                      {supplier}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Bill No</label>
                <input
                  type="text"
                  name="billNo"
                  value={formData.billNo}
                  onChange={handleChange}
                  placeholder="Enter Bill Number"
                  className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Product Name</label>
                <select
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  <option value="">Select Product</option>
                  {productNames.map((product, index) => (
                    <option key={index} value={product}>
                      {product}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Factory</label>
                <select
                  name="factory"
                  value={formData.factory}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  <option value="">Select Factory</option>
                  {factories.map((factory, index) => (
                    <option key={index} value={factory}>
                      {factory}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Quantity (Kgs)</label>
                <input
                  type="number"
                  name="qty"
                  value={formData.qty}
                  onChange={handleChange}
                  placeholder="Enter quantity in Kgs"
                  className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  <option value="">Select Type</option>
                  <option value="GUM">GUM</option>
                  <option value="INK">INK</option>
                </select>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="text-gray-600 hover:underline"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-gray-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReelStockPurchaseTable;
