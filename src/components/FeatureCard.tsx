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
      className={`card-glass group cursor-pointer fade-in-delay-${delay}`}
      style={{ animationDelay: `${delay * 0.3}s` }}
    >
      <div className="space-y-8">
        <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-foreground uppercase tracking-[0.1em] group-hover:text-gradient transition-all duration-500">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/90 transition-colors duration-500">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
    </div>
  );
};