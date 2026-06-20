import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' | 'outline' | 'normal'
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-block text-center font-oswald text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary text-white py-3.5 px-7 hover:bg-primary-hover active:scale-[0.98]',
    outline: 'border-2 border-primary text-white py-3 px-7 hover:bg-primary transition-colors duration-300 active:scale-[0.98]',
    normal: 'text-white hover:text-primary py-2 active:scale-[0.98]',
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
