import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden p-3 bg-black">
      {/* Sidebar - Fixed */}
      <div className="fixed left-0 pt-3 pb-3 top-0 h-full w-72 z-50">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="ml-72 flex-1 relative">
        {/* Header - Fixed within Main */}
        <div className="fixed top-0 left-72  right-0 z-40 bg-grey-100 shadow-sm">
          <Header />
        </div>

        {/* Scrollable Content Below Header */}
        <div className=" h-full pt-20 px-1 ">
          {children || <Outlet />} {/* This enables both usage styles */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
