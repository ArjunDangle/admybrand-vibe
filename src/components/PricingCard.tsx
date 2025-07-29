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
      className={`${popular ? 'card-pricing-popular' : 'card-pricing'} fade-in-delay-${delay}`}
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{plan}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline space-x-2">
            <span className="text-4xl font-bold text-foreground">{price}</span>
            <span className="text-muted-foreground">{period}</span>
          </div>
        </div>

        <Button 
          variant={popular ? 'accent' : 'ghost'} 
          className="w-full"
        >
          {buttonText}
        </Button>

        <div className="space-y-3 pt-4">
          <h4 className="font-medium text-foreground">What's included:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <svg 
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};