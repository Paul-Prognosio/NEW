import React, { useState } from 'react';
import { MessageSquare, Brain, FileText, Zap, ArrowRight, Check } from 'lucide-react';

const steps = [
  {
    title: 'Collect & Connect',
    description: 'Seamlessly gather feedback from multiple channels and integrate with your existing tools.',
    icon: MessageSquare,
    details: {
      subtitle: 'Unified Data Collection',
      description: 'Connect all your customer feedback channels into one centralized platform. From social media to support tickets, surveys to reviews - capture every customer voice.',
      features: [
        'Automatic data collection from 50+ platforms',
        'Real-time synchronization',
        'Custom API integration support',
        'Data cleaning and preprocessing'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      stats: [
        { label: 'Data Sources', value: '50+' },
        { label: 'Processing Time', value: '< 1s' },
        { label: 'Success Rate', value: '99.9%' }
      ]
    }
  },
  {
    title: 'Analyze & Understand',
    description: 'Our AI engine processes feedback to extract meaningful insights and patterns.',
    icon: Brain,
    details: {
      subtitle: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze your customer feedback to uncover hidden patterns, sentiment trends, and actionable insights.',
      features: [
        'Deep learning sentiment analysis',
        'Topic clustering and categorization',
        'Trend identification',
        'Anomaly detection'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      stats: [
        { label: 'Accuracy', value: '95%' },
        { label: 'Languages', value: '30+' },
        { label: 'Analysis Speed', value: '2ms' }
      ]
    }
  },
  {
    title: 'Report & Visualize',
    description: 'Get comprehensive reports with actionable insights for your strategy.',
    icon: FileText,
    details: {
      subtitle: 'Interactive Reporting',
      description: 'Transform complex data into clear, actionable insights with our interactive dashboards and customizable reports.',
      features: [
        'Custom dashboard creation',
        'Automated report generation',
        'Interactive visualizations',
        'Export in multiple formats'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      stats: [
        { label: 'Report Types', value: '15+' },
        { label: 'Update Frequency', value: 'Real-time' },
        { label: 'Export Formats', value: '5+' }
      ]
    }
  },
  {
    title: 'Act & Improve',
    description: 'Implement data-driven improvements to enhance customer satisfaction.',
    icon: Zap,
    details: {
      subtitle: 'Action Management',
      description: 'Turn insights into action with our comprehensive improvement tracking and implementation system.',
      features: [
        'Priority-based recommendations',
        'Implementation tracking',
        'ROI measurement',
        'Team collaboration tools'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      stats: [
        { label: 'Success Rate', value: '85%' },
        { label: 'Avg. Implementation', value: '2 weeks' },
        { label: 'ROI Tracking', value: 'Real-time' }
      ]
    }
  }
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transform Feedback into Results
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our streamlined process turns complex customer feedback into clear, actionable insights in four simple steps.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`flex items-center p-4 rounded-lg transition-all ${
                activeStep === index
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <step.icon className="h-6 w-6 mr-2" />
              <span className="font-medium">{step.title}</span>
              {index < steps.length - 1 && (
                <ArrowRight className="h-5 w-5 ml-4 text-gray-400" />
              )}
            </button>
          ))}
        </div>

        {/* Step Details */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Image */}
            <div className="relative h-96">
              <img
                src={steps[activeStep].details.image}
                alt={steps[activeStep].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-600/80 mix-blend-multiply" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-2">{steps[activeStep].details.subtitle}</h3>
                <p className="text-white/90">{steps[activeStep].details.description}</p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="p-8">
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {steps[activeStep].details.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Performance Metrics</h4>
                <div className="grid grid-cols-3 gap-4">
                  {steps[activeStep].details.stats.map((stat, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-500">{stat.label}</div>
                      <div className="text-xl font-bold text-indigo-600">{stat.value}</div>
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