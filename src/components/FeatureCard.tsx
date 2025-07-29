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
    <div className="card-codeart group cursor-pointer">
      <div className="space-y-6">
        <div className="w-12 h-12 flex items-center justify-center text-foreground group-hover:text-primary transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-mono-heading text-lg">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm font-light">{description}</p>
      </div>
    </div>
  );
};