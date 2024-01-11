import React from 'react';

interface SquareProps {
  value: string;
}

const Square: React.FC<SquareProps> = ({ value }) => {
  return (
    <div className="w-full md:w-1/2">
      <div className="w-full h-full border border-black flex items-center justify-center">
        <img src={value} alt="" />
      </div>
    </div>
  );
};

export default Square;