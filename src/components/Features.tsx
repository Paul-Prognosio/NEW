import React, { useState } from 'react';
import { BarChart2, Brain, Layout, Users, ArrowRight, MessageSquare, LineChart, Shield } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Feedback Analysis',
    description: 'Our advanced AI engine processes customer feedback across all channels, providing deep insights into customer sentiment, needs, and trends.',
    icon: Brain,
    details: {
      capabilities: [
        'Natural Language Processing for context understanding',
        'Multi-language support for global businesses',
        'Emotion detection beyond basic sentiment analysis',
        'Context-aware interpretation of customer feedback'
      ],
      metrics: {
        accuracy: '95%',
        processingSpeed: '< 2 seconds',
        languages: '30+'
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    }
  },
  {
    name: 'Advanced Analytics Dashboard',
    description: 'Visualize your customer feedback data with interactive charts, real-time updates, and customizable reporting features.',
    icon: BarChart2,
    details: {
      capabilities: [
        'Real-time data visualization',
        'Custom report generation',
        'Trend analysis and forecasting',
        'Export capabilities in multiple formats'
      ],
      metrics: {
        updateFrequency: 'Real-time',
        exportFormats: '5+',
        customWidgets: '20+'
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    }
  },
  {
    name: 'Smart Integration Hub',
    description: 'Connect seamlessly with your existing tools and platforms to centralize all customer feedback in one place.',
    icon: Layout,
    details: {
      capabilities: [
        'One-click integration setup',
        'Automated data synchronization',
        'Custom API endpoints',
        'Secure data transfer protocols'
      ],
      metrics: {
        integrations: '50+',
        syncSpeed: '< 5 minutes',
        uptime: '99.9%'
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    }
  },
  {
    name: 'Predictive Customer Insights',
    description: 'Leverage machine learning to predict customer behavior and identify opportunities for improvement before issues arise.',
    icon: Users,
    details: {
      capabilities: [
        'Churn prediction and prevention',
        'Customer satisfaction forecasting',
        'Trend prediction',
        'Automated alert system'
      ],
      metrics: {
        predictionAccuracy: '92%',
        alertSpeed: 'Instant',
        dataPoints: '1M+'
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    }
  }
];

export function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Tools for Customer Understanding
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Transform your customer feedback into actionable insights with our comprehensive suite of analysis tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Feature List */}
          <div className="lg:col-span-1 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-indigo-50 border-2 border-indigo-500'
                    : 'hover:bg-gray-50 border-2 border-transparent'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${
                    activeFeature === index ? 'bg-indigo-500' : 'bg-gray-100'
                  }`}>
                    <feature.icon className={`h-6 w-6 ${
                      activeFeature === index ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                </div>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Feature Details */}
          <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-8">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <img
                src={features[activeFeature].details.image}
                alt={features[activeFeature].name}
                className="rounded-xl object-cover w-full h-64"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Key Capabilities</h4>
                <ul className="space-y-3">
                  {features[activeFeature].details.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-indigo-500 mr-2" />
                      <span className="text-gray-600">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Performance Metrics</h4>
                <div className="space-y-4">
                  {Object.entries(features[activeFeature].details.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-sm text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="text-xl font-bold text-indigo-600">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}