import React from 'react'
interface Props{

    text:string;
}
export const Strip = ({text}:Props) => {
  return (
    <div
      className=" font-medium text-slate-50 lg:text-2xl flex justify-center 
        items-center h-[3.6rem] bg-green-700  mb-0"
    >
      {text}
    </div>
  );
}
