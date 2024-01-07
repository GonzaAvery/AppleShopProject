import React from 'react';

interface SquareProps {
  imagePath: string;
  destination: string;
}

const Square: React.FC<SquareProps> = ({ imagePath, destination }) => {
  const handleClick = () => {
    // Puedes agregar lógica adicional al manejo de clics si es necesario.
  };

  return (
    <button className="bg-blue-500 p-4 m-2" onClick={handleClick}>
      <img src={imagePath} alt="Computer" className="w-full h-auto" />
    </button>
  );
};

export default Square;