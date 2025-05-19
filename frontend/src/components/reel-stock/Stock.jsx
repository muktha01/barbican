// import React from 'react';

// const StockTable = () => {
//   return (
//     <div className="h-full w-full bg-white rounded-2xl shadow-md p-4 md:p-6 lg:p-8 font-sans">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-4">
//         <div className="flex items-center gap-2 text-gray-500 text-sm mb-2 md:mb-0">
//           <span className="text-lg">💧</span>
//           <span>Gum & Ink &gt;&gt;</span>
//           <span className="text-black font-medium">Stock</span>
//         </div>
//         <div className="flex items-center text-gray-600 text-sm gap-2 flex-wrap">
//           <span className="flex items-center gap-1">
//             <span className="text-lg">📅</span> October 2024
//           </span>
//           <span className="text-xs text-gray-400">TO</span>
//           <span className="flex items-center gap-1">
//             <span className="text-lg">📅</span> December 2024
//           </span>
//         </div>
//       </div>

//       <div className="overflow-x-auto mt-4">
//         <table className="min-w-full text-sm text-left">
//           <thead className="text-gray-400 border-b border-gray-200">
//             <tr>
//               <th className="py-3 px-4">Date</th>
//               <th className="py-3 px-4">Purchase</th>
//               <th className="py-3 px-4">Usage</th>
//               <th className="py-3 px-4">Stock</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700">
//             {[1, 2, 3, 4].map((_, index) => (
//               <tr key={index} className="border-b border-gray-100">
//                 <td className="py-4 px-4 font-semibold">24/09/2024</td>
//                 <td className="py-4 px-4">100</td>
//                 <td className="py-4 px-4 font-semibold">60</td>
//                 <td className="py-4 px-4">40</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StockTable;



// ProductStock.jsx

import React from 'react';

const StockTable = () => {
  const productData = [
    { name: 'Notebook', sku: 'NBK-101', quantity: 50, price: 120 },
    { name: 'Pen', sku: 'PEN-202', quantity: 200, price: 10 },
    { name: 'Eraser', sku: 'ERS-303', quantity: 150, price: 5 },
    { name: 'Marker', sku: 'MRK-404', quantity: 80, price: 35 },
  ];

  return (
    <div className="h-full w-full bg-white rounded-2xl shadow-md p-4 md:p-6 lg:p-8 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2 md:mb-0">
          <span className="text-lg">💧</span>
          <span>Gum & Ink &gt;&gt;</span>
          <span className="text-black font-medium">Product Stock</span>
        </div>
        <div className="text-sm text-gray-500">Updated: April 2025</div>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-400 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Product Name</th>
              <th className="py-3 px-4">SKU</th>
              <th className="py-3 px-4">Quantity</th>
              <th className="py-3 px-4">Price (₹)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {productData.map((product, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-4 px-4 font-semibold">{product.name}</td>
                <td className="py-4 px-4">{product.sku}</td>
                <td className="py-4 px-4">{product.quantity}</td>
                <td className="py-4 px-4">₹{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTable;
