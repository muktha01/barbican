import React from 'react';
import {
  Menu,
  User,
  Droplet,
  Layers,
  Disc,
  ChevronDown,
  ChevronRight,
  User2Icon,
  Factory,
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
  const [openReel, setOpenReel] = React.useState(true);
  const [openGum, setOpenGum] = React.useState(false);
  const [openBoard, setOpenBoard] = React.useState(false);

  return (
    <div className="h-full bg-white shadow-xl flex flex-col justify-between border-r border-gray-200 rounded-tr-3xl rounded-br-3xl overflow-hidden">
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

          {/* Gum & Ink */}
          <DropdownItem
            icon={<Layers className="w-5 h-5" />}
            label="Gum & Ink"
            isOpen={openGum}
            onToggle={() => setOpenGum(!openGum)}
          >
            <SubLinks />
          </DropdownItem>

          {/* Reel Stock */}
          <DropdownItem
            icon={<Disc className="w-5 h-5" />}
            label="Reel Stock"
            isOpen={openReel}
            onToggle={() => setOpenReel(!openReel)}
          >
            <SubLinks />
          </DropdownItem>

          {/* Board Stock */}
          <DropdownItem
            icon={<Disc className="w-5 h-5" />}
            label="Board Stock"
            isOpen={openBoard}
            onToggle={() => setOpenBoard(!openBoard)}
          >
            <div className="ml-6 md:ml-8 mt-2 space-y-2">
              <SidebarLink to="/job-cards" label="Board-Stack Jobcards" />
              <SidebarLink to="/stockTable" label="Board-Stack Stock" />
              <SidebarLink to="/matter" label="Board-Stack Matter " />
              <SidebarLink to="/companyList" label="Board-Stack Company " />
            </div>
          </DropdownItem>

          {/* Report (No submenu for now) */}
          <NavItem to="/report" label="Report" icon={<Droplet className="w-5 h-5" />} />
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 text-xs md:text-sm text-gray-500">
        {/* Optional Footer Info */}
      </div>
    </div>
  );
}

// ---- Reusable Components ----

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

// ---- Shared Submenu Links for Gum & Ink / Reel ----
const SubLinks = () => (
  <div className="ml-6 md:ml-8 mt-2 space-y-2">
    <SidebarLink to="/supplier" label="Supplier" />
    <SidebarLink to="/product-stock" label="Product" />
    <SidebarLink to="/purchase" label="Purchase Entry" />
    <SidebarLink to="/usage" label="Usage" />
    <SidebarLink to="/swapping" label="Swapping" />
  </div>
);
