import React from 'react';

export function BottomCTA() {
  return (
    <div className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Unlock the Power of Customer Feedback?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Start your free trial now or schedule a demo to learn more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-md font-semibold text-lg hover:bg-blue-50 transition-colors">
              Start Your Free Trial
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-semibold text-lg hover:bg-white/10 transition-colors">
              Schedule a Demo
            </button>
          </div>

          <div className="flex justify-center items-center space-x-8 text-white/80">
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
}