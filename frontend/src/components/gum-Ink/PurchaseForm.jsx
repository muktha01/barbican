import React from "react";
import { CalendarDays, ChevronDown } from "lucide-react";

const PurchaseForm = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl h-full p-6 sm:p-10 border-md">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-6">
        <div className="flex items-center space-x-2 text-gray-600 text-sm">
          <span className="inline-flex items-center text-gray-500">
            <span className="w-3 h-3 rounded-full bg-[#E6E6E6] mr-1"></span>
            Gum & Ink
          </span>
          <span className="text-gray-400">&#62;&#62;</span>
          <span className="font-medium text-black">Purchase</span>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium">
          Submit
        </button>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-4 mb-4 gap-4">
        {/* Row 1 */}
        <div className="relative">
          <label className="text-sm text-gray-600">Date</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="dd/mm/yy"
              className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
            />
            <CalendarDays className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600">Supplier Name</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="Select supplier"
              className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
            />
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600">Invoice Date</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="dd/mm/yy"
              className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
            />
            <CalendarDays className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600">Invoice Number</label>
          <input
            type="text"
            placeholder="Invoice number"
            className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-4 mb-4 gap-4">
        <div>
          <label className="text-sm text-gray-600">Reel Size</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="Select size"
              className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
            />
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600">Material Code</label>
          <input
            type="text"
            placeholder="Enter code"
            className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm outline-none placeholder:text-gray-400"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">GSM/BF</label>
          <input
            type="text"
            placeholder="Ex: 500gsm/200bf"
            className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm outline-none placeholder:text-gray-400"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Color Shade</label>
          <input
            type="text"
            placeholder="Enter shade"
            className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm outline-none placeholder:text-gray-400"
          />
        </div>

     
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
          <label className="text-sm text-gray-600">Weight</label>
          <input
            type="text"
            placeholder="Type here.."
            className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm outline-none placeholder:text-gray-400"
          />
        </div>
        <div className="w-1/2">
            <label className="invisible block text-sm">Add Product</label> {/* keeps alignment */}
            <button className="w-full text-sm text-red-500 border border-gray-300 bg-transparent rounded-md px-3 py-2 transition-colors outline-none">
            + ADD Product
            </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseForm;
