import { ButtonHTMLAttributes } from "react";



export function Button({ 
  onClick, 
  disabled, 
  className, 
  children
}: TButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-flex items-center bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${className}`}
    >
      {children}
    </button>
  );
}


type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
};