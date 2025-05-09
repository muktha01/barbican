import React from "react";

const OffsetCompanyList = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl h-full p-6 sm:p-10 border-md">

      <div className="max-w-7xl mx-auto bg-white rounded-lg  overflow-hidden flex flex-col h-full">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-lg md:text-xl font-semibold text-gray-700">
            Offset Company List
          </h1>
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

        {/* Table */}
        <div className="overflow-x-auto flex-grow">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm md:text-base font-medium">
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Company Name</th>
                <th className="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                "Jayamani Offset",
                "Rathna Offset",
                "Shanthi Offset",
                "Radha Offset",
                "Radha Screen Offset",
                "RVS Offset",
              ].map((company, index) => (
                <tr
                  key={index}
                  className=" hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{company}</td>
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
          <p className="mt-2 md:mt-0">
            Developed by Barbikan Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default OffsetCompanyList;
