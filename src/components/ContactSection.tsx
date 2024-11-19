import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export function ContactSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const response = await fetch('https://hook.eu2.make.com/7l1e3xty3dlgg71anfi4d5p93txfkb28', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'waitlist',
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) throw new Error('Subscription failed');

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(true);
      setTimeout(() => {
        setStatus('idle');
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to Transform Your Customer Insights?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our waitlist to be the first to experience Prognosio when we launch.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center">
            <div className="min-w-0 flex-1">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                type="email"
                id="email"
                className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                disabled={isLoading}
                className="block w-full sm:w-auto px-6 py-3 rounded-md border border-transparent text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center">
                  {isLoading ? 'Joining...' : 'Join Waitlist'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </button>
            </div>
          </form>

          {status === 'success' && (
            <div className="mt-4 text-sm text-green-600 flex items-center justify-center">
              <Mail className="h-4 w-4 mr-2" />
              Thank you! We'll notify you when we launch.
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 text-sm text-red-600 flex items-center justify-center">
              <Mail className="h-4 w-4 mr-2" />
              Something went wrong. Please try again.
            </div>
          )}

          <p className="mt-3 text-sm text-gray-500">
            We care about your data. Read our{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}