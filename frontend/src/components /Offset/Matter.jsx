import React from 'react';

const MatterList = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl h-full p-6 sm:p-10 border-md">
      <div className="bg-white rounded-2xl  p-6 overflow-x-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
          <h1 className="text-2xl font-semibold text-gray-800">Offset Matter List</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg text-sm w-60 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                🔍
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-500 text-white font-medium py-2 px-4 rounded-lg text-sm">
              Add New
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="text-xs uppercase bg-gray-100 text-gray-600">
              <tr>
                <th scope="col" className="px-6 py-4">#</th>
                <th scope="col" className="px-6 py-4">Company Name</th>
                <th scope="col" className="px-6 py-4">Matter</th>
                <th scope="col" className="px-6 py-4">Created Date</th>
                <th scope="col" className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { id: 1, company: "Jayamani Offset", matter: "Flow Detergent Powder 3Kg", date: "07/12/2024" },
                { id: 2, company: "Jayamani Offset", matter: "Tracktee Athletic Black & Yellow", date: "17/12/2024" },
                { id: 3, company: "Jayamani Offset", matter: "Tracktee Athletic Brown & Biscuit", date: "17/12/2024" },
                { id: 4, company: "Jayamani Offset", matter: "Tracktee Sports (Brown)", date: "30/12/2024" },
                { id: 5, company: "Jayamani Offset", matter: "Tracktee Sports (Yellow)", date: "30/12/2024" },
                { id: 6, company: "Jayamani Offset", matter: "Tracktee Sports (Black & Red)", date: "30/12/2024" },
              ].map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{row.id}</td>
                  <td className="px-6 py-4">{row.company}</td>
                  <td className="px-6 py-4">{row.matter}</td>
                  <td className="px-6 py-4">{row.date}</td>
                  <td className="px-6 py-4">
                    <button className="text-gray-500 hover:text-gray-700">
                      ⋮
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination and Footer */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-6 gap-4">
          <div className="text-xs text-gray-500">Rows per page:
            <select className="ml-2 border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400">
              <option>100</option>
              <option>50</option>
              <option>25</option>
            </select>
          </div>
          <div className="text-xs text-gray-500">1–59 of 59</div>
          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-gray-600 text-lg">◀</button>
            <button className="text-gray-400 hover:text-gray-600 text-lg">▶</button>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-400">
          © All rights reserved by Krishna Packaging <br />
          Developed by Barbikan Technologies
        </div>
      </div>
    </div>
  );
};

export default MatterList;
