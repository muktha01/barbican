import { useState } from 'react';
import { FileText, ChevronRight, Pencil, Trash2 } from 'lucide-react';

export default function Purchase2() {
  const [data, setData] = useState([
    { date: '20/04/2025', brand: 'Logitech', model: 'M185', quantity: 15 },
    { date: '21/04/2025', brand: 'HP', model: 'K1500', quantity: 25 },
    { date: '20/04/2025', brand: 'Dell', model: 'MS116', quantity: 30 },
    { date: '21/04/2025', brand: 'Lenovo', model: '300 Wireless', quantity: 12 },
  ]);

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white w-full max-w-6xl rounded-xl shadow-md border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 py-4 bg-gray-50 border-b border-gray-200 gap-4">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 font-medium space-x-1">
            <span className="flex items-center space-x-1">
              <FileText className="w-4 h-4 text-gray-400" />
              <span>Accessories</span>
            </span>
            <ChevronRight className="w-4 h-4" />
            <FileText className="w-4 h-4 text-black" />
            <span className="text-black font-semibold ml-1">Laptop Accessories</span>
          </div>

          {/* Submit Button */}
          <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition">
            Submit
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto w-full">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-white text-gray-500 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Brand Name</th>
                <th className="px-6 py-3 font-medium">Model No</th>
                <th className="px-6 py-3 font-medium">Quantity</th>
                <th className="px-6 py-3 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 transition hover:bg-gray-50">
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">{item.brand}</td>
                  <td className="px-6 py-4">{item.model}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4 flex justify-center items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                      <Pencil className="w-4 h-4 text-gray-700" />
                    </button>
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100"
                      onClick={() => handleDelete(index)}
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
