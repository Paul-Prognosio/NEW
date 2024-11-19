import React from 'react';
import { Brain } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Prognosio</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#features" className="text-gray-500 hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="text-gray-500 hover:text-gray-900">How It Works</a>
            <a href="#pricing" className="text-gray-500 hover:text-gray-900">Pricing</a>
            <button className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}