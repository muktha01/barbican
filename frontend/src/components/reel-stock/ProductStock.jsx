import { ChevronRight, FileText, Pencil, Trash } from "lucide-react";
import React, { useState } from "react";
import { PiFilmReelThin } from "react-icons/pi";

const ReelStockProductStock = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    company: "",
    openingStock: "",
    currentStock: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setProducts([...products, formData]);
    setShowModal(false);
    setFormData({
      productName: "",
      company: "",
      openingStock: "",
      currentStock: "",
      type: "",
    });
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl backdrop-blur-md w-full max-w-6xl h-full p-6 sm:p-10 border-md">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 py-4 bg-gray-50 border-b border-gray-200 gap-4">
        <div className="flex items-center text-sm text-gray-500 font-medium space-x-1">
          <span className="flex items-center space-x-1">
            <PiFilmReelThin className="w-5 h-5" />
            <span>Reel Stock</span>
          </span>
          <ChevronRight className="w-4 h-4" />
          <FileText className="w-4 h-4 text-black" />
          <span className="text-black font-semibold ml-1">Product Stock</span>
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
              <th className="px-6 py-3 font-medium">Product Name</th>
              <th className="px-6 py-3 font-medium">Company</th>
              <th className="px-6 py-3 font-medium">Opening Stock (Kgs)</th>
              <th className="px-6 py-3 font-medium">Current Stock (Kgs)</th>
              <th className="px-6 py-3 font-medium">Type</th>
              <th className="px-6 py-3 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {products.map((item, index) => (
              <tr key={index} className="border-b border-gray-100 transition">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{item.productName}</td>
                <td className="px-6 py-4">{item.company}</td>
                <td className="px-6 py-4">{item.openingStock}</td>
                <td className="px-6 py-4">{item.currentStock}</td>
                <td className="px-6 py-4">{item.type}</td>
                <td className="px-6 py-4 flex justify-center items-center gap-2">
                  <Pencil className="w-4 h-4 text-gray-700" />
                  <Trash className="w-4 h-4 text-red-600" />
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center text-gray-400">
                  No product stock added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-40 backdrop-blur-xs flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Add Product Stock</h2>

            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Opening Stock (Kgs)</label>
                <input
                  type="number"
                  name="openingStock"
                  value={formData.openingStock}
                  onChange={handleChange}
                  placeholder="Enter opening stock in Kgs"
                  className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Current Stock (Kgs)</label>
                <input
                  type="number"
                  name="currentStock"
                  value={formData.currentStock}
                  onChange={handleChange}
                  placeholder="Enter current stock in Kgs"
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
                  <option value="">Select</option>
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

export default ReelStockProductStock;
