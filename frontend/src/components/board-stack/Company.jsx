import React, { useState } from "react";
import { ChevronRight, FileText, Pencil, Trash } from "lucide-react";
import { PiFactoryLight } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

const GrandStockCompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    person: "",
    phone: "",
    gst: "",
    address: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setCompanies([...companies, formData]);
    setShowModal(false);
    setFormData({ name: "", person: "", phone: "", gst: "", address: "" });
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl h-full p-6 sm:p-10 border-md flex flex-col min-h-[80vh]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 py-4 bg-gray-50 border-b border-gray-200 gap-4">
        <div className="flex items-center text-sm text-gray-500 font-medium space-x-1">
          <span className="flex items-center space-x-1">
            <PiFactoryLight className="w-5 h-5" />
            <span>Company List</span>
          </span>
          <ChevronRight className="w-4 h-4" />
        </div>
         <div className="flex items-center gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 border rounded-md w-full md:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <FiSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition"
                  >
                    Add New
                  </button>
                </div>
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col">
        {/* Table */}
        <div className="overflow-x-auto mt-4 flex-grow">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-white text-gray-500 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 font-medium w-20">S.NO</th>
                <th className="px-4 py-3 font-medium">Company Name</th>
                <th className="px-4 py-3 font-medium text-right w-32">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {companies.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 transition">
                  <td className="px-4 py-4 w-16">{index + 1}</td>
                  <td className="px-4 py-4">{item.name}</td>
                  <td className="px-4 py-4 w-32">
                    <div className="flex justify-end items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                        <Pencil className="w-4 h-4 text-gray-700" />
                      </div>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                        <Trash className="w-4 h-4 text-red-600" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
              {companies.length === 0 && (
                <tr>
                  <td colSpan="3" className="px-6 py-4 text-center text-gray-400">
                    No offset companies added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 text-gray-500 text-xs md:text-sm border-t mt-6">
        <p>© All rights reserved by Krishna Packaging</p>
        <p className="mt-2 md:mt-0">Developed by Barbikan Technologies</p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-40 backdrop-blur-xs flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Create New Offset Company</h2>
            <form className="space-y-4">
              {[
                { label: "Company Name", name: "name", icon: "building-2" },
                { label: "Person Name", name: "person", icon: "user" },
                { label: "Phone Number", name: "phone", icon: "phone" },
                { label: "GST Number", name: "gst", icon: "file-text" },
                { label: "Address", name: "address", icon: "map-pin" },
              ].map((field) => (
                <div className="relative" key={field.name}>
                  <label className="text-sm font-medium">{field.label}</label>
                  <div className="flex items-center border rounded-md px-3 py-2 mt-1">
                    <i data-lucide={field.icon} className="w-5 h-5 text-gray-500 mr-2" />
                    <input
                      type="text"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className="flex-1 outline-none bg-transparent"
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                    />
                  </div>
                </div>
              ))}
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
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
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

export default GrandStockCompanyList;
