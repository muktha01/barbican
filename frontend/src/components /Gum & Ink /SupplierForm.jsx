import React, { useState } from 'react';

const SupplierForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  return (
    <div className="h-full w-full bg-[#FAFAFA] rounded-2xl p-4 sm:p-6 md:p-8 text-gray-800">
      {/* Top Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600 font-medium">
          <span className="text-xl">💧</span>
          <span>Gum & Ink &gt;&gt;</span>
          <span className="font-semibold text-black">Supplier</span>
        </div>
        <button 
          onClick={handleSubmit}
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition text-sm sm:text-base"
        >
          Submit
        </button>
      </div>

      {/* Form Section */}
      <form 
        onSubmit={handleSubmit}
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
      >
        <div className="flex flex-col">
          <label className="mb-1 text-sm sm:text-base font-medium">Supplier Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            placeholder="Surya"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm sm:text-base font-medium">Address</label>
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleChange}
            placeholder="24-vnr"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm sm:text-base font-medium">Phone number</label>
          <input 
            type="text" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange}
            placeholder="9876543210"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </form>
    </div>
  );
};

export default SupplierForm;
