import React from "react";

interface Props {
  letter: string;
}

const LetterCard: React.FC<Props> = ({ letter }) => {
  return (
    <div
      className="flex justify-center items-center bg-gray-100 w-[3.15rem] 
        c-clear-border rounded-lg  h-[3.15rem] "
    >
      {letter}
    </div>
  );
};

export default LetterCard;
