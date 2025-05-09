import React from 'react';
import {
  Menu,
  User,
  Package,
  Droplet,
  Layers,
  Disc,
  Circle,
  LineChart,
  LayoutGrid,
  ChevronDown,
  ChevronRight,
  User2Icon,
  Factory,
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
  const [openReel, setOpenReel] = React.useState(true);
  const [openBoard, setOpenBoard] = React.useState(false);

  return (
    <div className="h-full  bg-white shadow-xl flex flex-col justify-between border-r border-gray-200 rounded-tr-3xl rounded-br-3xl overflow-hidden">
      {/* Top Section */}
      <div>
        {/* Logo + Menu */}
        <div className="flex items-center justify-between px-4 py-6">
          <div className="text-red-600 font-bold text-xl md:text-2xl">Barbikan</div>
          <Menu className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </div>

        {/* Nav Items */}
        <nav className="space-y-1">
          <NavItem to="/user" label="User" icon={<User2Icon className="w-5 h-5" />} />
          <NavItem to="/factory" label="Factory" icon={<Factory className="w-5 h-5" />} />
        
          {/* Gum & Ink Board Stock */}
          <DropdownItem
            icon={<Layers className="w-5 h-5" />}
            label="Gum & Ink"
            isOpen={openBoard}
            onToggle={() => setOpenBoard(!openBoard)}
          >

          <div className="ml-6 md:ml-8 mt-2 space-y-2">
              <SidebarLink to="/supplier" label="Supplier" />
              <SidebarLink to="/product-stock" label="Product " />
              <SidebarLink to="/purchase" label="Purchase Entry" />
              {/* <SidebarLink to="/purchase-form" label="Purchase Form" /> */}
              <SidebarLink to="/usage" label="Usage" />
              {/* <SidebarLink to="/usage-form" label="Usage Form" /> */}
            
            
              {/* <SidebarLink to="/supplier-form" label="Supplier Form" /> */}
              <SidebarLink to="/swapping" label="Swapping" />
            </div>
          </DropdownItem>

          {/* Reel Stock Dropdown */}
          <DropdownItem
            icon={<Disc className="w-5 h-5" />}
            label="Reel Stock"
            isOpen={openReel}
            onToggle={() => setOpenReel(!openReel)}
          >
            <div className="ml-6 md:ml-8 mt-2 space-y-2">
              <SidebarLink to="/supplier" label="Supplier" />
              <SidebarLink to="/product-stock" label="Product " />
              <SidebarLink to="/purchase" label="Purchase Entry" />
              {/* <SidebarLink to="/purchase-form" label="Purchase Form" /> */}
              <SidebarLink to="/usage" label="Usage" />
              {/* <SidebarLink to="/usage-form" label="Usage Form" /> */}
            
            
              {/* <SidebarLink to="/supplier-form" label="Supplier Form" /> */}
              <SidebarLink to="/swapping" label="Swapping" />
            </div>
          </DropdownItem>

            {/* Board Stock */}
            <DropdownItem
            icon={<Droplet className="w-5 h-5" />}
            label="Board Stock"
            isOpen={false}
          />
           {/* Report */}
           <DropdownItem
            icon={<Droplet className="w-5 h-5" />}
            label="Report"
            isOpen={false}
          />


          <div className="px-4 pt-6 pb-2 text-xs md:text-sm font-semibold text-black  tracking-wide">
            Board Stack 
          </div>

          <SidebarLink  to="/job-cards" label="Board-Stack Jobcards" icon={<Circle className="w-5 h-5" />} />
          <SidebarLink to="/stockTable" label="Board-Stack Stock" icon={<LineChart className="w-5 h-5" />} />
          <SidebarLink to="/matter" label="Board-Stack Matter" icon={<LayoutGrid className="w-5 h-5" />} />
          <SidebarLink to="/companyList" label="Board-Stack Company" icon={<LayoutGrid className="w-5 h-5" />} />

        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 text-xs md:text-sm text-gray-500">
        {/* Optional Footer Info */}
      </div>
    </div>
  );
}

const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center space-x-3 px-4 py-2 rounded-md cursor-pointer transition 
      text-sm md:text-base font-medium 
      ${isActive ? 'bg-gray-100 text-gray-900 border border-gray-800' : 'text-gray-700 hover:bg-gray-100 hover:text-black'}`
    }
  >
    {icon && <div className="bg-gray-100 p-2 rounded-full">{icon}</div>}
    <span>{label}</span>
  </NavLink>
);

const DropdownItem = ({ icon, label, isOpen, onToggle, children }) => (
  <div>
    <div
      className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer transition"
      onClick={onToggle}
    >
      <div className="flex items-center space-x-3">
        <div className="bg-gray-100 p-2 rounded-full text-black">{icon}</div>
        <span className="text-sm md:text-base font-medium text-black">{label}</span>
      </div>
      {onToggle && (isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />)}
    </div>
    {isOpen && children}
  </div>
);

const SidebarLink = ({ to, label, icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center space-x-3 px-4 py-2 rounded-md cursor-pointer transition 
      text-sm md:text-base font-medium 
      ${isActive ? 'bg-gray-100 text-gray-900 border border-gray-800' : 'text-gray-700 hover:bg-gray-100 hover:text-black'}`
    }
  >
    {icon && <div className="bg-gray-100 p-2 rounded-full">{icon}</div>}
    <span>{label}</span>
  </NavLink>
);