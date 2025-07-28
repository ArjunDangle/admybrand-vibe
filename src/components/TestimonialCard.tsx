import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  title,
  company,
  rating,
}) => {
  return (
    <div className="card-elegant text-center max-w-2xl mx-auto">
      <div className="space-y-6">
        {/* Rating Stars */}
        <div className="flex justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'text-accent' : 'text-muted'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-xl lg:text-2xl text-foreground italic leading-relaxed">
          "{quote}"
        </blockquote>

        {/* Author */}
        <div className="space-y-1">
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-muted-foreground">
            {title} at {company}
          </p>
        </div>
      </div>
    </div>
  );
};