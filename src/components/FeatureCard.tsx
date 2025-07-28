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
      style={{ animationDelay: `${delay * 0.15}s` }}
    >
      <div className="space-y-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-primary border border-primary/20">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground uppercase tracking-wider">{title}</h3>
        <p className="text-muted-foreground leading-relaxed font-light">{description}</p>
      </div>
    </div>
  );
};