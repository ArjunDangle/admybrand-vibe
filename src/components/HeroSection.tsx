import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center brutalist-grid">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-16 max-w-6xl mx-auto">
          {/* CodeArt Hero Typography */}
          <div className="space-y-8">
            <h1 className="text-hero-codeart">
              <div className="text-mono-heading text-4xl mb-4">ADMYBRAND</div>
              <div>Crafting Digital</div>
              <div className="text-primary">Marketing Intelligence</div>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              A small AI suite providing businesses with the edge they need for an authentic connection with their customers.
            </p>
          </div>
          
          {/* CodeArt CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-codeart">
              Let's talk!
            </button>
            <button className="btn-outline">
              Watch Demo
            </button>
          </div>

          {/* Stats - CodeArt minimal style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-24">
            <div className="card-codeart text-center">
              <div className="text-6xl font-light text-foreground mb-4">50K+</div>
              <div className="text-mono-heading text-sm">Active Users</div>
            </div>
            <div className="card-codeart text-center">
              <div className="text-6xl font-light text-foreground mb-4">99%</div>
              <div className="text-mono-heading text-sm">Satisfaction Rate</div>
            </div>
            <div className="card-codeart text-center">
              <div className="text-6xl font-light text-foreground mb-4">5x</div>
              <div className="text-mono-heading text-sm">ROI Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};