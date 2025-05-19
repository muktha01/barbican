import React from "react";
import { Pencil, Trash } from "lucide-react";

const User = () => {
  const user = {
    name: "Pandian",
    role: "Staff",
    mobile: "12354678",
    image: "https://via.placeholder.com/150", // Replace with user's image URL
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 h-full mx-auto border">
      <div className="flex flex-col items-center text-center mb-6">
        <img
          src={user.image}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover shadow-lg"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">{user.name}</h2>
        <p className="text-md text-gray-500 r">{user.role}</p>
      </div>

      <div className="flex flex-col items-center text-center mb-6">
        <p className="flex items-center ">
          <span className="font-medium text-gray-600 mr-2 ">Mobile:</span>
          <span>{user.mobile}</span>
        </p>
      </div>

      <div className="flex justify-center gap-8 mt-6">
        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition duration-200 ease-in-out">
          <Pencil className="w-5 h-5" /> <span>Edit</span>
        </button>
        <button className="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium transition duration-200 ease-in-out">
          <Trash className="w-5 h-5" /> <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default User;
