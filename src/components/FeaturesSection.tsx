import React from 'react';
import { FeatureCard } from './FeatureCard';
import featuresVisual from '@/assets/features-visual.jpg';

// Feature icons (simplified SVGs)
const AnalyticsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const AIIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const AutomationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const IntegrationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1a2 2 0 102 0V4z" />
  </svg>
);

const ReportingIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const PredictionIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const features = [
  {
    icon: <AnalyticsIcon />,
    title: 'Advanced Analytics',
    description: 'Deep insights into customer behavior, campaign performance, and market trends with real-time data visualization.',
  },
  {
    icon: <AIIcon />,
    title: 'AI-Powered Insights',
    description: 'Machine learning algorithms that identify patterns and opportunities you might miss, driving smarter decisions.',
  },
  {
    icon: <AutomationIcon />,
    title: 'Campaign Automation',
    description: 'Streamline your marketing workflows with intelligent automation that optimizes campaigns in real-time.',
  },
  {
    icon: <IntegrationIcon />,
    title: 'Seamless Integration',
    description: 'Connect with your existing tools and platforms through our comprehensive API and pre-built integrations.',
  },
  {
    icon: <ReportingIcon />,
    title: 'Custom Reporting',
    description: 'Generate beautiful, branded reports that showcase your marketing impact to stakeholders and clients.',
  },
  {
    icon: <PredictionIcon />,
    title: 'Predictive Modeling',
    description: 'Forecast market trends and customer behavior to stay ahead of the competition with predictive analytics.',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Header - CodeArt Style */}
        <div className="text-center space-y-8 mb-24 fade-in">
          <h2 className="text-section-title">
            <span className="block">POWERFUL</span>
            <span className="block text-gradient">FEATURES</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Everything you need to transform your marketing strategy and drive meaningful results 
            with cutting-edge AI technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>

        {/* Visual Section */}
        <div className="relative h-[500px] rounded-3xl overflow-hidden fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/30"></div>
          <img
            src={featuresVisual}
            alt="Features visualization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-6">
              <h3 className="text-4xl lg:text-5xl font-black tracking-tight">SEE IT IN ACTION</h3>
              <p className="text-xl opacity-90 font-light max-w-lg">Experience the power of AI-driven marketing intelligence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};