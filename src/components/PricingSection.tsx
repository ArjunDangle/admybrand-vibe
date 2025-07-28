import React from 'react';
import Image from 'next/image';
import { PricingCard } from './PricingCard';
import pricingVisual from '@/assets/pricing-visual.jpg';

const pricingPlans = [
  {
    plan: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for small teams getting started with AI marketing.',
    features: [
      'Up to 5 campaigns',
      'Basic analytics dashboard',
      'Email support',
      '1 team member',
      'API access',
    ],
    buttonText: 'Start Free Trial',
  },
  {
    plan: 'Professional',
    price: '$149',
    period: '/month',
    description: 'Advanced features for growing marketing teams.',
    features: [
      'Unlimited campaigns',
      'Advanced AI insights',
      'Priority support',
      'Up to 10 team members',
      'Custom integrations',
      'A/B testing suite',
      'Predictive analytics',
    ],
    popular: true,
    buttonText: 'Get Started',
  },
  {
    plan: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Tailored solutions for large organizations.',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom AI models',
      'Unlimited team members',
      'White-label options',
      'SLA guarantee',
      'Advanced security',
    ],
    buttonText: 'Contact Sales',
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-6 mb-20 fade-in">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground">
            Simple, Transparent
            <span className="block text-gradient font-medium">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your team. Start with a free trial and scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.plan}
              {...plan}
              delay={index + 1}
            />
          ))}
        </div>

        {/* Visual Feature */}
        <div className="relative h-80 rounded-3xl overflow-hidden fade-in">
          <Image
            src={pricingVisual}
            alt="Pricing analytics visualization"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl text-white space-y-4">
                <h3 className="text-3xl font-semibold">30-Day Money-Back Guarantee</h3>
                <p className="text-lg opacity-90">
                  Try ADmyBRAND AI Suite risk-free. If you're not completely satisfied, 
                  we'll refund your money, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};