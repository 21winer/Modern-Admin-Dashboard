
import type { PropsWithChildren } from 'react';

type CardVariant = 'default' | 'outline' | 'filled';
type CardPadding = 'none' | 'sm' | 'md' | 'lg';

interface CardProps {
  variant?: CardVariant;
  padding?: CardPadding;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  hover = false,
  onClick,
}: PropsWithChildren<CardProps>) {
  // Classes de base
  const baseClasses = 'rounded-lg transition-all';
  
  // Variantes
  const variants = {
    default: 'bg-white shadow-sm border border-gray-200',
    outline: 'border border-gray-300 bg-transparent',
    filled: 'bg-gray-100 border border-gray-200'
  };
  
  // Padding
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  // Effet de survol
  const hoverClasses = hover ? 'hover:shadow-md hover:border-gray-300 cursor-pointer' : '';
  
  // Combinaison des classes
  const cardClasses = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${hoverClasses} ${className}`;

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;