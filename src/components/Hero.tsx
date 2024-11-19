import React from 'react';
import { LineChart, Brain, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Coming Soon Banner */}
        <div className="bg-indigo-600 text-white text-center py-3 px-4">
          <p className="text-sm font-medium">
            🚀 Coming Soon! Join the waitlist to get early access and exclusive launch offers
          </p>
        </div>

        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 mb-4">
                <span className="text-indigo-600 text-sm font-medium">Coming Soon</span>
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Unlock Customer Insights and</span>
                <span className="block text-indigo-600">Drive Continuous Improvement</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Our AI-powered tool helps SaaS and E-commerce businesses analyze feedback, understand customer needs, and generate future-focused recommendations for better decision-making.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#pricing" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="flex space-x-4">
              <LineChart className="h-32 w-32 text-indigo-600 opacity-20" />
              <Brain className="h-32 w-32 text-indigo-600 opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}