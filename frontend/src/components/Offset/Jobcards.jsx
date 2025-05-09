import React from 'react';
import { FiSearch, FiEdit2, FiShare2, FiPrinter } from 'react-icons/fi';

const JobCardList = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl h-full p-6 sm:p-10 border-md">
      <div className="bg-white rounded-lg  p-6 flex flex-col h-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-0">JobCard List</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-md w-full md:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            <button className="bg-red-600 hover:bg-red-500 text-white font-medium py-2 px-4 rounded-md text-sm">
              Add New
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="py-3 px-4 font-medium">SNo</th>
                <th className="py-3 px-4 font-medium">Company Name</th>
                <th className="py-3 px-4 font-medium">Product Name</th>
                <th className="py-3 px-4 font-medium">Created Date</th>
                <th className="py-3 px-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  sno: 60,
                  company: 'D.S.K.Garments',
                  product: 'Tracktee Sports (Yellow)',
                  date: '25/04/2025',
                },
                {
                  sno: 59,
                  company: 'Nagamalli Fireworks',
                  product: '50 shot Unit Box ( Bottom)',
                  date: '24/04/2025',
                },
                {
                  sno: 58,
                  company: 'Nagamalli Fireworks',
                  product: '50 Shot Unit Box ( Top)',
                  date: '24/04/2025',
                },
                {
                  sno: 57,
                  company: 'Sri Sastha Traders',
                  product: 'VMR Appalam Mc Box',
                  date: '24/04/2025',
                },
                {
                  sno: 56,
                  company: 'V.V.V.Anandham Sons',
                  product: 'Anandha Joti - 1 Lit ( Single colour)',
                  date: '24/04/2025',
                },
                {
                  sno: 55,
                  company: 'V.V.V.Anandham Sons',
                  product: 'Gingelly Oil 1 Lit (Double colour)',
                  date: '24/04/2025',
                },
              ].map((item, index) => (
                <tr key={index} className=" hover:bg-gray-50 ">
                  <td className="py-3 px-4">{item.sno}</td>
                  <td className="py-3 px-4">{item.company}</td>
                  <td className="py-3 px-4">{item.product}</td>
                  <td className="py-3 px-4">{item.date}</td>
                  <td className="py-3 px-4 flex items-center gap-4 text-gray-500">
                    <FiEdit2 className="cursor-pointer hover:text-gray-700" size={18} />
                    <FiShare2 className="cursor-pointer hover:text-gray-700" size={18} />
                    <FiPrinter className="cursor-pointer hover:text-gray-700" size={18} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs mt-6">
          <div className="mb-2 md:mb-0">
            <p>Rows per page: 
              <select className="ml-2 border rounded px-1 py-0.5 text-gray-700 ">
                <option>100</option>
              </select>
            </p>
          </div>
          <div>
            <p>1–100 of 855</p>
          </div>
          <div className="flex gap-2">
            <button className="p-1 text-gray-400 hover:text-gray-600">&lt;</button>
            <button className="p-1 text-gray-400 hover:text-gray-600">&gt;</button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs border-t pt-4">
          <p>© All rights reserved by Krishna Packaging</p>
          <p>Developed by Barbikan Technologies</p>
        </div>
      </div>
    </div>
  );
};

export default JobCardList;
