import React from 'react';
import { Button } from './ui/button';
import heroVisual from '@/assets/hero-3d-visual.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-glow/10"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light text-foreground leading-tight">
                The Future of
                <span className="block text-gradient font-medium">
                  Marketing Intelligence
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Harness the power of AI to transform your marketing strategy. 
                Get deeper insights, automate campaigns, and drive results like never before.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 fade-in-delay-1">
              <Button variant="accent" size="lg">
                Start Free Trial
              </Button>
              <Button variant="ghost" size="lg">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8 fade-in-delay-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2.5x</div>
                <div className="text-sm text-muted-foreground">ROI Increase</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative lg:h-[600px] fade-in-delay-1">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-3xl"></div>
            <img
              src={heroVisual}
              alt="AI Marketing Intelligence Visualization"
              className="w-full h-full object-cover rounded-3xl shadow-strong"
            />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-accent-glow/20 rounded-full blur-2xl animate-pulse delay-700"></div>
    </section>
  );
};