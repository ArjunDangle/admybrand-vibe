import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { Carousel } from './Carousel';

const testimonials = [
  {
    quote: "ADmyBRAND AI Suite transformed our marketing strategy completely. We've seen a 300% increase in qualified leads and our ROI has never been better.",
    author: "Sarah Chen",
    title: "Marketing Director",
    company: "TechFlow Inc",
    rating: 5,
  },
  {
    quote: "The predictive analytics feature alone saved us thousands in ad spend. The AI insights are incredibly accurate and actionable.",
    author: "Michael Rodriguez",
    title: "CMO", 
    company: "GrowthLabs",
    rating: 5,
  },
  {
    quote: "Finally, a marketing platform that actually understands our business. The automation features have freed up our team to focus on strategy.",
    author: "Emily Watson",
    title: "VP of Marketing",
    company: "InnovateCorp",
    rating: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-6 mb-20 fade-in">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground">
            Trusted by Marketing
            <span className="block text-gradient font-medium">
              Professionals
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See what industry leaders are saying about ADmyBRAND AI Suite and how 
            it's transforming their marketing results.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="fade-in-delay-1">
          <Carousel autoPlay interval={6000}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
              />
            ))}
          </Carousel>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 fade-in-delay-2">
          <div className="text-center mb-12">
            <p className="text-muted-foreground">Trusted by leading companies worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground font-medium">Company {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};