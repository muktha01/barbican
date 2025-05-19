import React, { useState, useEffect } from "react";
import { Calendar, ChevronRight, FileText, Pencil, Trash } from "lucide-react";
import { PiFactoryLight } from "react-icons/pi";
import axios from "axios";

const FactoryTable = () => {
  const [factories, setFactories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    contactPerson: "",
    mobile: "",
  });
  const [error, setError] = useState('');

  // Fetch factories on component mount
  useEffect(() => {
    const fetchFactories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/factories');
        if (response.status === 200) {
          setFactories(response.data.factories); // Update the factories state
        } else {
          setError('No factories found');
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error fetching factories');
      }
    };

    fetchFactories(); // Call the fetch function when the component mounts
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async () => {
  try {
    console.log(formData);  // Log formData to see the payload
    const response = await axios.post('http://localhost:8000/api/factories', {
      factory_name: formData.name,
      location: formData.location,
      contact_person_name: formData.contactPerson,
      contact_person_mobile: formData.mobile,
    });
    console.log(response);  // Log the response data
    if (response.data.message === "Factory created successfully") {
      setFactories([...factories, response.data.factory]);
      setShowModal(false);
      setFormData({ name: "", location: "", contactPerson: "", mobile: "" });
    }
  } catch (error) {
    console.error('Error creating factory:', error);
    if (error.response) {
      console.error('Server response:', error.response.data);  // Log server error details
    }
    setError('Failed to create factory');
  }
};


  return (
    <div className="bg-white rounded-3xl shadow-xl backdrop-blur-md w-full max-w-6xl h-full p-6 sm:p-10 border-md">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 py-4 bg-gray-50 border-b border-gray-200 gap-4">
        <div className="flex items-center text-sm text-gray-500 font-medium space-x-1">
          <span className="flex items-center space-x-1">
            <PiFactoryLight className="w-5 h-5" />
            <span>Factory</span>
          </span>
          <ChevronRight className="w-4 h-4" />
          <FileText className="w-4 h-4 text-black" />
          <span className="text-black font-semibold ml-1">List</span>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition"
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
              <th className="px-6 py-3 font-medium">Factory Name</th>
              <th className="px-6 py-3 font-medium">Contact Person</th>
              <th className="px-6 py-3 font-medium">Mobile Number</th>
              <th className="px-6 py-3 font-medium">Location</th>
              <th className="px-6 py-3 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {factories.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-100 transition">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{item.factory_name}</td>
                <td className="px-6 py-4">{item.contact_person_name}</td>
                <td className="px-6 py-4">{item.contact_person_mobile}</td>
                <td className="px-6 py-4">{item.location}</td>
                <td className="px-6 py-4 flex justify-center items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center transition">
                    <Pencil className="w-4 h-4 text-gray-700" />
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center transition">
                    <Trash className="w-4 h-4 text-red-600" />
                  </div>
                </td>
              </tr>
            ))}
            {factories.length === 0 && (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-400">
                  No factories added yet.
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
            <h2 className="text-2xl font-bold mb-6">Create New Factory</h2>

            <form className="space-y-4">
              <div className="relative">
                <label className="text-sm font-medium">Factory Name</label>
                <div className="flex items-center border rounded-md px-3 py-2 mt-1">
                  <i data-lucide="building-2" className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="flex-1 outline-none bg-transparent"
                    placeholder="Enter factory name"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-sm font-medium">Contact Person</label>
                <div className="flex items-center border rounded-md px-3 py-2 mt-1">
                  <i data-lucide="user" className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="flex-1 outline-none bg-transparent"
                    placeholder="Enter contact person name"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-sm font-medium">Phone Number</label>
                <div className="flex items-center border rounded-md px-3 py-2 mt-1">
                  <i data-lucide="phone" className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="flex-1 outline-none bg-transparent"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-sm font-medium">Location</label>
                <div className="flex items-center border rounded-md px-3 py-2 mt-1">
                  <i data-lucide="home" className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="flex-1 outline-none bg-transparent"
                    placeholder="Enter location"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm mt-2">{error}</div>
              )}

              <div className="flex items-center justify-end space-x-3 mt-6">
                <button
                  type="button"
                  className="text-sm text-gray-500"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FactoryTable;
