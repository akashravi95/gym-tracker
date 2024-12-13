import React from 'react';
import { Dumbbell } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">FitTrack Pro</span>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-700">Dashboard</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Members</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Classes</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Reports</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}