import React, { useState } from 'react';
import { PricingCard } from '../components/PricingCard';
import { PricingHeader } from '../components/PricingHeader';
import { PricingTestimonials } from '../components/PricingTestimonials';

const generatePlans = (isAnnual: boolean) => [
  {
    name: "3-Day Free Trial",
    price: "0",
    period: isAnnual ? "year" : "month",
    description: "Try out our Basic plan features completely free for 3 days. No credit card required.",
    features: [
      { text: "AI-powered feedback analysis", included: true },
      { text: "Monthly insights report", included: true },
      { text: "Basic customer support", included: true },
      { text: "Weekly insights report", included: false },
      { text: "Predictive reporting", included: false },
      { text: "Advanced analytics dashboard", included: false },
      { text: "Priority support", included: false },
    ],
    ctaText: "Join Waitlist",
    trialDays: 3
  },
  {
    name: "Basic Plan",
    price: isAnnual ? "252" : "30",
    period: isAnnual ? "year" : "month",
    description: "Perfect for small businesses or startups looking to get started with customer feedback analysis.",
    features: [
      { text: "AI-powered feedback analysis", included: true },
      { text: "Monthly insights report", included: true },
      { text: "Basic customer support", included: true },
      { text: "Weekly insights report", included: false },
      { text: "Predictive reporting", included: false },
      { text: "Advanced analytics dashboard", included: false },
      { text: "Priority support", included: false },
    ],
    ctaText: "Join Waitlist",
    savings: isAnnual ? "Save €108/year" : undefined,
    discount: isAnnual ? "30% off" : undefined
  },
  {
    name: "Pro Plan",
    price: isAnnual ? "588" : "70",
    period: isAnnual ? "year" : "month",
    description: "Ideal for growing businesses that need deeper insights and predictive reporting to stay ahead.",
    features: [
      { text: "AI-powered feedback analysis", included: true },
      { text: "Weekly insights report", included: true },
      { text: "Predictive reporting and trend analysis", included: true },
      { text: "Advanced analytics dashboard", included: true },
      { text: "Priority customer support", included: true },
      { text: "API access", included: false },
      { text: "Dedicated account manager", included: false },
    ],
    isPopular: true,
    ctaText: "Join Waitlist",
    savings: isAnnual ? "Save €252/year" : undefined,
    discount: isAnnual ? "30% off" : undefined
  },
  {
    name: "Enterprise Plan",
    price: isAnnual ? "1260" : "150",
    period: isAnnual ? "year" : "month",
    description: "Built for enterprises needing advanced, custom solutions and dedicated support for high-volume feedback.",
    features: [
      { text: "Everything in Pro Plan", included: true },
      { text: "Daily insights report", included: true },
      { text: "Customizable reporting metrics", included: true },
      { text: "API access for integrations", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "24/7 customer support", included: true },
      { text: "Custom feature development", included: true },
    ],
    ctaText: "Join Waitlist",
    isEnterprise: true,
    savings: isAnnual ? "Save €540/year" : undefined,
    discount: isAnnual ? "30% off" : undefined
  }
];

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const plans = generatePlans(billingPeriod === 'annual');

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-800">
            <span className="text-sm font-medium">🚀 Coming Soon - Join the Waitlist</span>
          </span>
        </div>
        
        <PricingHeader />
        
        {/* Billing Toggle */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-indigo-600' : 'text-gray-500'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
            className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 bg-gray-200"
            role="switch"
            aria-checked={billingPeriod === 'annual'}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                billingPeriod === 'annual' ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${billingPeriod === 'annual' ? 'text-indigo-600' : 'text-gray-500'}`}>
            Annual Billing
          </span>
        </div>

        {/* Annual Savings Banner */}
        {billingPeriod === 'annual' && (
          <div className="text-center mb-8">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Save 30% with annual billing on all plans
            </span>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <PricingTestimonials />

        {/* Final CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Be the First to Experience Prognosio
          </h2>
          <p className="text-gray-600 mb-8">
            Join our waitlist to get notified when we launch and receive exclusive early-access benefits.
          </p>
        </div>
      </div>
    </div>
  );
}