import React, { ComponentPropsWithoutRef } from 'react'

interface InputProps extends ComponentPropsWithoutRef<"input"> {}

export default function Input({ children, className, ...props }: InputProps) {
  return (
    <input 
      className={`rounded-full bg-accent-soft hover:bg-accent-soft/50 focus:bg-accent-foreground transition-all outline-0 px-4 py-3 border border-border-strong ${className || ''}`}
      {...props}
    >
      {children}
    </input>
  )
}
