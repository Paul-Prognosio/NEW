import React, { useState } from 'react';
import { BarChart, Target, MessageSquare, TrendingUp, ChevronLeft, ChevronRight, Users, Star, LineChart } from 'lucide-react';

export function DemoSection() {
  const [activeSection, setActiveSection] = useState<string>('satisfaction');

  const sections = {
    satisfaction: {
      title: 'Customer Satisfaction Trends',
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Overall Score</h3>
              <Star className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="text-4xl font-bold text-indigo-600 mb-4">4.8 / 5.0</div>
            <div className="space-y-3">
              {[
                { label: '5 stars', percentage: 85 },
                { label: '4 stars', percentage: 10 },
                { label: '3 stars', percentage: 3 },
                { label: '2 stars', percentage: 1 },
                { label: '1 star', percentage: 1 },
              ].map((rating) => (
                <div key={rating.label} className="flex items-center">
                  <span className="w-16 text-sm text-gray-600">{rating.label}</span>
                  <div className="flex-1 mx-2">
                    <div className="bg-indigo-100 rounded-full h-2">
                      <div
                        className="bg-indigo-600 rounded-full h-2"
                        style={{ width: `${rating.percentage}%` }}
                      />
                    </div>
                  </div>
                  <span className="w-12 text-sm text-gray-600">{rating.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Monthly Trend</h3>
              <LineChart className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="h-48 relative">
              <div className="absolute inset-0 flex items-end justify-between px-4">
                {[65, 70, 85, 75, 90, 95].map((height, index) => (
                  <div key={index} className="w-8">
                    <div
                      className="bg-indigo-600 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
        </div>
      ),
    },
    feedback: {
      title: 'Sentiment Analysis',
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Feedback Distribution</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-100 rounded-lg p-4 text-center">
                <span className="text-green-600 text-2xl font-bold block">75%</span>
                <p className="text-sm text-gray-600">Positive</p>
              </div>
              <div className="bg-yellow-100 rounded-lg p-4 text-center">
                <span className="text-yellow-600 text-2xl font-bold block">20%</span>
                <p className="text-sm text-gray-600">Neutral</p>
              </div>
              <div className="bg-red-100 rounded-lg p-4 text-center">
                <span className="text-red-600 text-2xl font-bold block">5%</span>
                <p className="text-sm text-gray-600">Negative</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Key Topics</h3>
            <div className="space-y-4">
              {[
                { topic: 'User Interface', count: 245, sentiment: 'positive' },
                { topic: 'Performance', count: 180, sentiment: 'positive' },
                { topic: 'Features', count: 156, sentiment: 'neutral' },
                { topic: 'Support', count: 89, sentiment: 'positive' },
              ].map((item) => (
                <div key={item.topic} className="flex items-center justify-between">
                  <span className="text-gray-700">{item.topic}</span>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">{item.count} mentions</span>
                    <div className={`w-3 h-3 rounded-full ${
                      item.sentiment === 'positive' ? 'bg-green-400' :
                      item.sentiment === 'neutral' ? 'bg-yellow-400' : 'bg-red-400'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    insights: {
      title: 'AI-Generated Insights',
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Improvement Opportunities</h3>
            <div className="space-y-4">
              {[
                { issue: 'Mobile Responsiveness', priority: 'High', impact: '35% of users' },
                { issue: 'Loading Speed', priority: 'Medium', impact: '28% of users' },
                { issue: 'Feature Requests', priority: 'Low', impact: '15% of users' },
              ].map((item) => (
                <div key={item.issue} className="border-l-4 border-indigo-600 pl-4">
                  <h4 className="font-medium text-gray-900">{item.issue}</h4>
                  <div className="flex items-center mt-1">
                    <span className={`text-sm ${
                      item.priority === 'High' ? 'text-red-600' :
                      item.priority === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                    }`}>{item.priority} Priority</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-600">Affects {item.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Recommended Actions</h3>
            <div className="space-y-4">
              {[
                'Optimize image loading for mobile devices',
                'Implement progressive web app features',
                'Add user-requested dashboard customization',
                'Enhance error messaging and feedback',
              ].map((action, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-sm text-indigo-600 font-medium">{index + 1}</span>
                  </div>
                  <p className="ml-3 text-gray-700">{action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  };

  const handlePrevious = () => {
    const sectionKeys = Object.keys(sections);
    const currentIndex = sectionKeys.indexOf(activeSection);
    const newIndex = currentIndex === 0 ? sectionKeys.length - 1 : currentIndex - 1;
    setActiveSection(sectionKeys[newIndex]);
  };

  const handleNext = () => {
    const sectionKeys = Object.keys(sections);
    const currentIndex = sectionKeys.indexOf(activeSection);
    const newIndex = currentIndex === sectionKeys.length - 1 ? 0 : currentIndex + 1;
    setActiveSection(sectionKeys[newIndex]);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">See Prognosio in Action</h2>
          <p className="mt-4 text-lg text-gray-600">Experience how our platform transforms feedback into actionable insights</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="bg-indigo-600 rounded p-2">
                <Target className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-semibold">Prognosio Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {sections[activeSection as keyof typeof sections].title}
            </h3>
            {sections[activeSection as keyof typeof sections].content}
          </div>

          <div className="flex justify-center space-x-2">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                className={`h-3 w-3 rounded-full transition-colors ${
                  activeSection === section ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                onClick={() => setActiveSection(section)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}