import React from 'react';
import { Button } from './ui/button';
import heroVisual from '@/assets/hero-3d-visual.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic background with gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-12 max-w-6xl mx-auto">
          {/* Main Headline - CodeArt Style */}
          <div className="space-y-8 fade-in">
            <h1 className="text-hero">
              <span className="block">CRAFTING</span>
              <span className="block text-gradient">DIGITAL</span>
              <span className="block">INTELLIGENCE</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
              Transform your marketing strategy with AI-powered insights that deliver 
              <span className="text-primary font-medium"> measurable results</span>. 
              The future of marketing intelligence is here.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-delay-1">
            <Button variant="primary" size="lg" className="min-w-[200px]">
              START FREE TRIAL
            </Button>
            <Button variant="ghost" size="lg" className="min-w-[200px]">
              WATCH DEMO
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="relative fade-in-delay-2">
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-3xl blur-xl"></div>
              <img
                src={heroVisual}
                alt="AI Marketing Intelligence Visualization"
                className="relative w-full h-auto rounded-3xl shadow-strong border border-border/20"
              />
            </div>
          </div>

          {/* Stats - CodeArt Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 fade-in-delay-3">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-primary mb-2">10K+</div>
              <div className="text-muted-foreground uppercase tracking-wider text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-accent mb-2">95%</div>
              <div className="text-muted-foreground uppercase tracking-wider text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-gradient mb-2">2.5x</div>
              <div className="text-muted-foreground uppercase tracking-wider text-sm">ROI Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};