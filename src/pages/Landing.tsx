import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { DemoSection } from '../components/DemoSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Pricing } from './Pricing';
import { NewsletterSubscription } from '../components/NewsletterSubscription';
import { ContactSection } from '../components/ContactSection';
import { BottomCTA } from '../components/BottomCTA';

export function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <DemoSection />
      <WhyChooseUs />
      <NewsletterSubscription />
      <div id="pricing">
        <Pricing />
      </div>
      <ContactSection />
      <BottomCTA />
    </div>
  );
}