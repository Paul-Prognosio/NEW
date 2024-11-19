import React from 'react';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  period: 'month' | 'year';
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
  isEnterprise?: boolean;
  savings?: string;
  discount?: string;
  trialDays?: number;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  isPopular,
  ctaText,
  isEnterprise,
  savings,
  discount,
  trialDays
}: PricingCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-8 relative ${isPopular ? 'ring-2 ring-indigo-600' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      {trialDays && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          {trialDays}-Day Free Trial
        </div>
      )}
      <div className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded mb-4 inline-block">
        Coming Soon
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="mb-2">
        <span className="text-4xl font-bold">€{price}</span>
        {!trialDays && <span className="text-gray-600">/{period}</span>}
      </div>
      {discount && (
        <div className="text-indigo-600 text-sm font-medium">
          {discount}
        </div>
      )}
      {savings && (
        <div className="text-green-600 text-sm font-medium mb-4">
          {savings}
        </div>
      )}
      {trialDays && (
        <div className="text-green-600 text-sm font-medium mb-4">
          No credit card required
        </div>
      )}
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className={`h-5 w-5 mr-2 ${feature.included ? 'text-indigo-600' : 'text-gray-300'}`} />
            <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>{feature.text}</span>
          </li>
        ))}
      </ul>
      <button 
        className={`w-full py-3 rounded-lg font-semibold transition ${
          trialDays
            ? 'bg-green-600 text-white hover:bg-green-700'
            : isEnterprise 
              ? 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        Join Waitlist
      </button>
    </div>
  );
}