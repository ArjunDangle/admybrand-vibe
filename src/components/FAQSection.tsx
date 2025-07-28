import React from 'react';
import { FAQAccordion } from './FAQAccordion';

const faqItems = [
  {
    question: "How does the AI-powered analytics work?",
    answer: "Our AI analyzes millions of data points across your marketing channels in real-time. It identifies patterns, predicts trends, and provides actionable insights that help you optimize campaigns for maximum ROI. The system learns from your specific business context and improves its recommendations over time."
  },
  {
    question: "What integrations are available?",
    answer: "ADmyBRAND AI Suite integrates with 200+ marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, Shopify, and many more. We also provide a robust API for custom integrations and can work with your team to build specific connectors if needed."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most customers see initial insights within 24-48 hours of connecting their data sources. Significant performance improvements typically occur within the first 2-4 weeks as the AI learns your audience patterns and optimizes campaigns accordingly."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade security including 256-bit SSL encryption, SOC 2 Type II compliance, and GDPR compliance. Your data is stored in secure, geo-distributed data centers with 99.9% uptime guarantee. We never share your data with third parties."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you'll retain access to your data for 90 days after cancellation for export purposes."
  },
  {
    question: "Do you offer training and support?",
    answer: "Yes! All plans include comprehensive onboarding, video tutorials, and documentation. Professional and Enterprise plans include dedicated support and training sessions. Our team of marketing experts is available to help you maximize the platform's potential."
  }
];

export const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-6 mb-20 fade-in">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground">
            Frequently Asked
            <span className="block text-gradient font-medium">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite. 
            Can't find what you're looking for? Reach out to our team.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto fade-in-delay-1">
          <FAQAccordion items={faqItems} />
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 fade-in-delay-2">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a 
            href="mailto:support@admybrand.com"
            className="text-accent hover:text-accent/80 font-medium transition-colors duration-200"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};