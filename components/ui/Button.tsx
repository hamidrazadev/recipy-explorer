import React, { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button 
      className={`rounded-full bg-accent-soft hover:bg-accent transition-all ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}