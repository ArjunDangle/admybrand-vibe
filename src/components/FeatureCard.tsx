import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <div 
      className={`card-feature fade-in-delay-${delay}`}
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="space-y-4">
        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};