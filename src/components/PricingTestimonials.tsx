import React from 'react';
import { Users } from 'lucide-react';

const testimonials = [
  {
    quote: "The Pro Plan has been instrumental in helping us grow and respond to customer needs.",
    author: "Emily Chen",
    role: "Product Manager at TechFlow"
  },
  {
    quote: "Switching to the Enterprise plan gave us the customization and support we needed to scale.",
    author: "Marcus Rodriguez",
    role: "CTO at GrowthMetrics"
  }
];

export function PricingTestimonials() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-xl">
          <div className="text-gray-700 italic mb-4">{testimonial.quote}</div>
          <div className="flex items-center">
            <div className="bg-indigo-100 rounded-full p-2 mr-4">
              <Users className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">{testimonial.author}</div>
              <div className="text-sm text-gray-600">{testimonial.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}