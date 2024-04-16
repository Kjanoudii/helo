import React from 'react'
import Link from 'next/link';
interface Props {
  className?: string;
  children?: React.ReactNode;
}
 const CustomLink: React.FC<Props> = ({className, children }) => {
  return (
    <Link
      className={`font-medium block mx-auto w-28 text-s rounded-lg bg-slate-50 
          py-2  text-center my-10 ${className}`}
      href="/"
    >
     {children}
    </Link>
  );
}

export default CustomLink;