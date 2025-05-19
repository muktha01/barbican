import React, { useState } from 'react';
import { FiSearch, FiEdit2, FiShare2, FiPrinter, FiPlus } from 'react-icons/fi';
import { ChevronRight, FileText } from 'lucide-react';
import { PiFactoryLight } from 'react-icons/pi';

const JobCardList = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobCards, setJobCards] = useState([]);

  const [formData, setFormData] = useState({
    press: '',
    matter: '',
    board: '',
    company: '',
    printingSize: '',
    quantity: '',
    unit: '',
    plate: '',
    color: '',
    extraColor: '',
    contactDetails: '',
    printingDetails: '',
  });

  const pressOptions = ['Krishna Press', 'Barbikan Printers', 'Sunlight Press'];
  const matterOptions = ['Label Design', 'Packaging', 'Sticker Print'];
  const boardOptions = ['Duplex 300gsm', 'Art Card 250gsm', 'Ivory 180gsm'];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newCard = {
      ...formData,
      date: new Date().toLocaleDateString(),
    };
    setJobCards([...jobCards, newCard]);
    setShowModal(false);
    setFormData({
      press: '',
      matter: '',
      board: '',
      company: '',
      printingSize: '',
      quantity: '',
      unit: '',
      plate: '',
      color: '',
      extraColor: '',
      contactDetails: '',
      printingDetails: '',
    });
  };

  const handleAddNewOption = (type) => {
    console.log(`Add new ${type}`);
    // You can expand this to show another modal or input
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl h-full p-6 sm:p-10 border-md flex flex-col min-h-[80vh]">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 py-4 bg-gray-50 border-b border-gray-200 gap-4">
        <div className="flex items-center text-sm text-gray-500 font-medium space-x-1">
          <span className="flex items-center space-x-1">
            <PiFactoryLight className="w-5 h-5" />
            <span>Job Card List</span>
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

      {/* Table */}
      <div className="flex-grow flex flex-col">

         <div className="flex flex-col gap-4 w-full max-w-md mt-4">
      {/* Press Dropdown */}
      <div className="flex items-center gap-2">
        <select className="flex-grow px-4 py-2 border border-gray-100 rounded-md bg-gray-50 text-gray-600  focus:outline-none">
          <option>Choose Press</option>
          <option>Krishna Press</option>
          <option>Barbikan Printers</option>
        </select>
        <button className="bg-red-500 p-2 rounded-md">
          <FiPrinter className="text-white" />
        </button>
      </div>

      {/* Printing Size Dropdown */}
      <div className="flex items-center  gap-2">
        <select className="flex-grow px-4 py-2 border border-gray-100 rounded-md bg-gray-100 text-gray-600 focus:outline-none">
          <option>Choose Printing Size</option>
          <option>8.5 x 11</option>
          <option>11 x 17</option>
        </select>
        <button className="bg-red-500 p-2 rounded-md">
          <FiPrinter className="text-white" />
        </button>
      </div>
    </div>
        <div className="overflow-x-auto mt-4 flex-grow">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-white text-gray-500 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 font-medium">S.NO</th>
                <th className="px-4 py-3 font-medium">Press Name</th>
                <th className="px-4 py-3 font-medium">Board/Paper</th>
                <th className="px-4 py-3 font-medium">Total Quantity</th>
                <th className="px-4 py-3 font-medium">Balance Quantity</th>
                {/* <th className="px-4 py-3 font-medium">Matter</th> */}
                <th className="px-4 py-3 font-medium">Created Date</th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {jobCards.map((card, index) => (
                <tr key={index} className="border-b border-gray-100 transition">
                  <td className="px-4 py-4">{index + 1}</td>
                  <td className="px-4 py-4">{card.press}</td>
                  <td className="px-4 py-4">{card.board}</td>
                  <td className="px-4 py-4">{card.quantity}</td>
                  <td className="px-4 py-4">{/* Balance Quantity Placeholder */}</td>
                  {/* <td className="px-4 py-4">{card.matter}</td> */}
                  <td className="px-4 py-4">{card.date}</td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex justify-end items-center gap-2">
                      <FiEdit2 className="w-4 h-4 text-gray-700 cursor-pointer" />
                      <FiShare2 className="w-4 h-4 text-blue-500 cursor-pointer" />
                      <FiPrinter className="w-4 h-4 text-green-600 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
              {jobCards.length === 0 && (
                <tr>
                  <td colSpan="8" className="px-6 py-4 text-center text-gray-400">
                    No job cards added yet.
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
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">Create New Job Card</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Dropdown with + button for Press */}
                <div className="flex items-center gap-2">
                  <select
                    name="press"
                    value={formData.press}
                    onChange={handleInputChange}
                    className="border px-4 py-2 rounded-md w-full"
                  >
                    <option value="">Choose Press</option>
                    {pressOptions.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <button type="button" onClick={() => handleAddNewOption('Press')}>
                    <FiPlus className="text-gray-600 hover:text-black" />
                  </button>
                </div>

                {/* Dropdown with + button for Matter */}
                <div className="flex items-center gap-2">
                  <select
                    name="matter"
                    value={formData.matter}
                    onChange={handleInputChange}
                    className="border px-4 py-2 rounded-md w-full"
                  >
                    <option value="">Choose Matter</option>
                    {matterOptions.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <button type="button" onClick={() => handleAddNewOption('Matter')}>
                    <FiPlus className="text-gray-600 hover:text-black" />
                  </button>
                </div>

                {/* Dropdown without + for Board */}
                <select
                  name="board"
                  value={formData.board}
                  onChange={handleInputChange}
                  className="border px-4 py-2 rounded-md col-span-2"
                >
                  <option value="">Choose Board/Paper</option>
                  {boardOptions.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                {/* Rest of the fields */}
                <input name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} className="border px-4 py-2 rounded-md" />
                <input name="printingSize" placeholder="Printing Size" value={formData.printingSize} onChange={handleInputChange} className="border px-4 py-2 rounded-md" />
                <input name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleInputChange} className="border px-4 py-2 rounded-md" />
                <input name="unit" placeholder="Unit" value={formData.unit} onChange={handleInputChange} className="border px-4 py-2 rounded-md" />
                <input name="plate" placeholder="Plate" value={formData.plate} onChange={handleInputChange} className="border px-4 py-2 rounded-md" />
                <input name="color" placeholder="Color" value={formData.color} onChange={handleInputChange} className="border px-4 py-2 rounded-md" />
                <input name="extraColor" placeholder="Extra Color" value={formData.extraColor} onChange={handleInputChange} className="border px-4 py-2 rounded-md" />
                <input name="contactDetails" placeholder="Contact Details" value={formData.contactDetails} onChange={handleInputChange} className="border px-4 py-2 rounded-md" />
                <input name="printingDetails" placeholder="Printing Details" value={formData.printingDetails} onChange={handleInputChange} className="border px-4 py-2 rounded-md col-span-2" />
              </div>

              <button type="button" onClick={handleSubmit} className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md mt-4">
                Add
              </button>
              <button type="button" onClick={() => setShowModal(false)} className="text-sm text-red-500 hover:underline w-full text-center mt-2">
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCardList;
