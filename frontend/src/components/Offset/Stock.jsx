import React from "react";

const OffsetStockTable = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl h-full p-6 sm:p-10 border-md">
      <div className="max-w-7xl mx-auto bg-white rounded-lg  overflow-hidden flex flex-col h-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4 gap-4 border-b">
          <h1 className="text-lg md:text-xl font-semibold text-gray-700">
            Offset Stock
          </h1>

          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Company Select */}
            <div className="flex gap-2">
              <select className="border rounded-md px-4 py-2 text-sm md:text-base focus:outline-none">
                <option>Choose Company</option>
              </select>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm md:text-base">
                Submit
              </button>
              <button className="text-red-600 hover:text-red-500 font-medium">
                Clear
              </button>
            </div>

            {/* Search and Add */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <svg
                  className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.64 3.64a7.5 7.5 0 0012.71 12.71z"
                  />
                </svg>
              </div>
              <button className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm md:text-base">
                Add New
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto flex-grow">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm md:text-base font-medium">
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Company Name</th>
                <th className="px-6 py-3 text-left">Board / Paper</th>
                <th className="px-6 py-3 text-left">Current Stock</th>
                <th className="px-6 py-3 text-left">Created Date</th>
                <th className="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { board: "30.75 x 29", stock: 54 },
                { board: "37.25 x 22.25", stock: 0 },
                { board: "31.5 x 23.62", stock: 22 },
                { board: "31.5 x 21.5", stock: 67 },
                { board: "37.40 x 25.5", stock: 60 },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">Jayamani Offset</td>
                  <td className="px-6 py-4">{item.board}</td>
                  <td className="px-6 py-4">{item.stock}</td>
                  <td className="px-6 py-4">04/12/2024</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-500 hover:text-gray-700">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 12h.01M12 12h.01M18 12h.01"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 text-gray-500 text-xs md:text-sm border-t">
          <p>© All rights reserved by Krishna Packaging</p>
          <div className="flex items-center gap-2">
            <p>Rows per page:</p>
            <select className="border rounded-md text-xs md:text-sm p-1">
              <option>100</option>
            </select>
            <p>1-14 of 14</p>
            <button className="hover:text-gray-700">&lt;</button>
            <button className="hover:text-gray-700">&gt;</button>
          </div>
          <p className="mt-2 md:mt-0">Developed by Barbikan Technologies</p>
        </div>
      </div>
    </div>
  );
};

export default OffsetStockTable;
