// import React, { useState } from 'react';

// const ProductStockForm = () => {
//   const [formData, setFormData] = useState({
//     productName: '',
//     sku: '',
//     quantity: '',
//     price: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ 
//       ...formData, 
//       [e.target.name]: e.target.value 
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted:', formData);
//   };

//   return (
//     <div className="h-full w-full bg-[#FAFAFA] rounded-2xl p-4 sm:p-6 md:p-8 text-gray-800">
//       {/* Top Header */}
//       <div className="flex justify-between items-center border-b pb-4">
//         <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600 font-medium">
//           <span className="text-xl">💧</span>
//           <span>Gum & Ink &gt;&gt;</span>
//           <span className="font-semibold text-black">Product Stock</span>
//         </div>
//         <button 
//           onClick={handleSubmit}
//           className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition text-sm sm:text-base"
//         >
//           Submit
//         </button>
//       </div>

//       {/* Form Section */}
//       <form 
//         onSubmit={handleSubmit}
//         className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 w-full"
//       >
//         <div className="flex flex-col">
//           <label className="mb-1 text-sm sm:text-base font-medium">Product Name</label>
//           <input 
//             type="text" 
//             name="productName" 
//             value={formData.productName} 
//             onChange={handleChange}
//             placeholder="Ex: Notebook"
//             className="border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="mb-1 text-sm sm:text-base font-medium">SKU</label>
//           <input 
//             type="text" 
//             name="sku" 
//             value={formData.sku} 
//             onChange={handleChange}
//             placeholder="Ex: NBK-101"
//             className="border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="mb-1 text-sm sm:text-base font-medium">Quantity</label>
//           <input 
//             type="number" 
//             name="quantity" 
//             value={formData.quantity} 
//             onChange={handleChange}
//             placeholder="Ex: 50"
//             className="border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="mb-1 text-sm sm:text-base font-medium">Price (₹)</label>
//           <input 
//             type="number" 
//             name="price" 
//             value={formData.price} 
//             onChange={handleChange}
//             placeholder="Ex: 120"
//             className="border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ProductStockForm;




// ProductStock.jsx

import React from 'react';

const ProductStock = () => {
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

export default ProductStock;
