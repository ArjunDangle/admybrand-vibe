import React from 'react';
import { Button } from './ui/button';
import heroVisual from '@/assets/hero-3d-visual.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* 2025 Mesh gradient background with floating elements */}
      <div className="absolute inset-0 bg-mesh">
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[100px] float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[25rem] h-[25rem] bg-accent/15 rounded-full blur-[80px] float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-12 max-w-6xl mx-auto">
          {/* Main Headline - CodeArt Style */}
          <div className="space-y-10 fade-in">
            <h1 className="text-hero">
              <span className="block">ADMYBRAND</span>
              <span className="block text-gradient">AI SUITE</span>
              <span className="block text-muted-foreground/80 text-5xl lg:text-6xl font-light tracking-wide">
                The Future of Marketing Intelligence
              </span>
            </h1>
            <p className="text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-5xl mx-auto font-light">
              Harness the power of <span className="text-primary font-semibold">AI-driven analytics</span> to transform your marketing strategy. 
              Experience unparalleled insights that drive <span className="text-accent font-semibold">measurable growth</span>.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center fade-in-delay-1">
            <Button variant="primary" size="lg" className="min-w-[250px] text-base">
              START FREE TRIAL
            </Button>
            <Button variant="ghost" size="lg" className="min-w-[250px] text-base">
              WATCH DEMO
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="relative fade-in-delay-2">
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-[3rem] blur-2xl glow-mixed"></div>
              <div className="card-glass relative overflow-hidden">
                <img
                  src={heroVisual}
                  alt="AI Marketing Intelligence Visualization"
                  className="w-full h-auto rounded-[2rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-[2rem]"></div>
              </div>
            </div>
          </div>

          {/* Stats - Enhanced 2025 Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 fade-in-delay-3">
            <div className="text-center card-glass">
              <div className="text-5xl lg:text-6xl font-black text-primary mb-4 glow-primary">50K+</div>
              <div className="text-foreground font-medium text-lg mb-2">Active Users</div>
              <div className="text-muted-foreground text-sm">Growing every day</div>
            </div>
            <div className="text-center card-glass">
              <div className="text-5xl lg:text-6xl font-black text-accent mb-4 glow-accent">99%</div>
              <div className="text-foreground font-medium text-lg mb-2">Satisfaction Rate</div>
              <div className="text-muted-foreground text-sm">Customer approved</div>
            </div>
            <div className="text-center card-glass">
              <div className="text-5xl lg:text-6xl font-black text-gradient mb-4">5x</div>
              <div className="text-foreground font-medium text-lg mb-2">ROI Increase</div>
              <div className="text-muted-foreground text-sm">Average improvement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};