import React from 'react';

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <div
      className={`mx-auto flex justify-center items-center my-7 text-center
                 rounded-lg text-[#F5F5F5] w-[6.56rem] h-[2.2rem] text-[12.7px]
                 ${className}`}
    >
      {children}
    </div>
  );
}

export default Button;
