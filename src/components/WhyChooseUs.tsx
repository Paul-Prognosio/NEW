import React from 'react';
import { Brain, TrendingUp, FileText, Share2, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Analysis',
    description: 'Our proprietary AI engine provides deeper insights than traditional analytics tools, with 95% accuracy in sentiment detection.',
    comparison: 'Others only offer basic sentiment analysis with 70-80% accuracy'
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Trend Detection',
    description: 'Identify emerging patterns and trends within minutes, not days or weeks.',
    comparison: 'Competitors typically require manual trend analysis or delayed reporting'
  },
  {
    icon: FileText,
    title: 'Actionable Reports',
    description: 'Get specific, implementable recommendations instead of just raw data.',
    comparison: 'Most tools only provide data without actionable insights'
  },
  {
    icon: Share2,
    title: 'Universal Integration',
    description: 'Connect with 50+ platforms and data sources out of the box.',
    comparison: 'Others limit integrations or charge extra for each connection'
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Setup',
    description: 'Be up and running in less than 15 minutes with our guided onboarding.',
    comparison: 'Traditional solutions often require weeks of setup and training'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'SOC 2 Type II certified with end-to-end encryption and GDPR compliance.',
    comparison: 'Many alternatives lack comprehensive security certifications'
  }
];

export function WhyChooseUs() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Prognosio?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the next generation of customer feedback analysis with capabilities that set us apart from traditional tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 rounded-lg p-3">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-red-100 rounded"></div>
                <p className="text-sm text-gray-500 pl-4 italic">
                  vs. Competition: {feature.comparison}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
          >
            See Our Plans
          </a>
        </div>
      </div>
    </div>
  );
}