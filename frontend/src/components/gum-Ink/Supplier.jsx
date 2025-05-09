import React from 'react';

const SupplierTable = () => {
  const suppliers = [
    { name: 'Surya', address: '24-vnr', phone: '9876543210' },
    { name: 'Surya', address: '24-vnr', phone: '9876543210' },
    { name: 'Surya', address: '24-vnr', phone: '9876543210' },
    { name: 'Surya', address: '24-vnr', phone: '9876543210' },
  ];

  return (
    <div className="h-full w-full bg-[#F9F9F9] rounded-2xl p-4 md:p-6 lg:p-8 overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div className="flex items-center text-gray-600 text-sm sm:text-base font-medium space-x-2">
          <span className="text-xl">💧</span>
          <span>Gum & Ink &gt;&gt;</span>
          <span className="text-black font-semibold">Supplier</span>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md text-sm sm:text-base font-semibold">
          Create
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-gray-700">
          <thead>
            <tr className="text-sm md:text-base text-gray-500 border-b">
              <th className="py-3 px-4">Supplier Name</th>
              <th className="py-3 px-4">Address</th>
              <th className="py-3 px-4">Ph.no</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-4 px-4 font-medium text-sm sm:text-base">{supplier.name}</td>
                <td className="py-4 px-4 text-sm sm:text-base">{supplier.address}</td>
                <td className="py-4 px-4 text-sm sm:text-base">{supplier.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierTable;
