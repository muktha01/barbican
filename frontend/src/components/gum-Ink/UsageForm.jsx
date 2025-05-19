import React from 'react';
import { CalendarDays, ChevronDown } from 'lucide-react';

const GumInkUsageForm = () => {
  return (
    <div className="h-full w-full bg-[#f9f9f9] p-4 md:p-6 lg:p-10 rounded-3xl">
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-gray-400">
          <span className="inline-flex items-center gap-2">
            <span className="text-lg">💧</span> Gum & Ink &gt;&gt;
          </span>
          <span className="text-black font-medium ml-2">Usage</span>
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-md font-medium text-sm hover:bg-gray-800">
          Submit
        </button>
      </div>

      <div className="space-y-6">
        {/* Date Field */}
        <div className="w-full max-w-xs">
          <label className="block text-gray-600 mb-2 text-sm">Date</label>
          <div className="relative">
            <input
              type="text"
              value="12/12/25"
              readOnly
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <CalendarDays className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {/* Reel Size */}
          <div>
            <label className="block text-gray-600 mb-2 text-sm">Reel Size</label>
            <div className="relative">
              <select className="w-full border border-gray-300 rounded-md pl-4 pr-8 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-400">
                <option>30 X 25.6</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* Material Code */}
          <div>
            <label className="block text-gray-600 mb-2 text-sm">Material Code</label>
            <input
              type="text"
              value="0001"
              readOnly
              className="w-full border border-gray-300 rounded-md pl-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* GSM/BF */}
          <div>
            <label className="block text-gray-600 mb-2 text-sm">GSM/BF</label>
            <input
              type="text"
              placeholder="..."
              className="w-full border border-gray-300 rounded-md pl-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Color Shade */}
          <div>
            <label className="block text-gray-600 mb-2 text-sm">Color Shade</label>
            <input
              type="text"
              value="Red"
              readOnly
              className="w-full border border-gray-300 rounded-md pl-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block text-gray-600 mb-2 text-sm">Weight</label>
            <input
              type="text"
              placeholder="Type here.."
              className="w-full border border-gray-300 rounded-md pl-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GumInkUsageForm;
