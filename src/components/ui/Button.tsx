import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-500',
    secondary: 'bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 focus-visible:ring-teal-500',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 active:bg-gray-100 text-gray-700 focus-visible:ring-gray-400',
    ghost: 'bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-700 focus-visible:ring-gray-400',
  };

  const sizeClasses = {
    sm: 'h-8 px-3 text-xs sm:text-sm',
    md: 'h-9 sm:h-10 px-3 sm:px-4 text-sm sm:text-base',
    lg: 'h-10 sm:h-12 px-4 sm:px-6 text-base sm:text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;