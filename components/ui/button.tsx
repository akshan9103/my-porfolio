import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) => {
  

  const baseStyles = "inline-flex justify-center items-center w-fit h-fit px-[24px] py-[14px] rounded-[10px] font-medium transition-colors focus:outline-none";

  const variants = {
    primary: "bg-black text-white hover:bg-neutral-800",
    secondary: "bg-transparent border border-black text-black hover:bg-neutral-100",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};