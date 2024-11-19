import React, { useState } from 'react';
import { Mail, CheckCircle, XCircle } from 'lucide-react';

export function NewsletterSubscription() {
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
          source: 'newsletter',
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) throw new Error('Subscription failed');
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-2 bg-indigo-100 rounded-full mb-4">
            <Mail className="h-6 w-6 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Early Access & 15% Off
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for early access to new features and an exclusive 15% discount on your first subscription.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {status === 'success' && (
              <div className="mt-4 flex items-center justify-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Thank you! Check your email for your discount code.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 flex items-center justify-center text-red-600">
                <XCircle className="h-5 w-5 mr-2" />
                <span>Something went wrong. Please try again.</span>
              </div>
            )}
          </form>

          <p className="mt-6 text-sm text-gray-500">
            By subscribing, you agree to receive marketing communications from us. 
            You can unsubscribe at any time.
          </p>

          <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span>Early feature access</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span>15% welcome discount</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span>Weekly insights</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}