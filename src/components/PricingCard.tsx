import React from 'react';
import { Button } from './ui/button';

interface PricingCardProps {
  plan: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  delay?: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  period,
  description,
  features,
  popular = false,
  buttonText,
  delay = 0,
}) => {
  return (
    <div 
      className={`relative group ${popular ? 'card-pricing-popular' : 'card-pricing'} fade-in-delay-${delay}`}
      style={{ animationDelay: `${delay * 0.3}s` }}
    >
      {popular && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-[0.15em] shadow-glow">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="space-y-10">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold text-foreground uppercase tracking-[0.1em] group-hover:text-gradient transition-all duration-500">{plan}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
        </div>

        <div className="text-center space-y-2">
          <div className="flex items-baseline justify-center space-x-3">
            <span className="text-6xl font-black text-primary group-hover:text-accent transition-colors duration-500">{price}</span>
            <span className="text-muted-foreground text-xl">{period}</span>
          </div>
        </div>

        <Button 
          variant={popular ? 'primary' : 'ghost'} 
          className="w-full text-lg"
        >
          {buttonText}
        </Button>

        <div className="space-y-6">
          <h4 className="font-bold text-foreground text-lg uppercase tracking-wide">What's included:</h4>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-glow">
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
                <span className="text-foreground text-lg group-hover:text-foreground transition-colors duration-500">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem] pointer-events-none"></div>
    </div>
  );
};