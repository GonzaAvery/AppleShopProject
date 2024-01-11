import React from 'react';
import Square from './common/Square';
import MacbookPro from '../assets/MacbookPro.jpg';

const Home: React.FC = () => {
  return (
    <div className="flex flex-wrap mt-16">
      <Square value={MacbookPro} />
      <Square value={MacbookPro} />
      <Square value={MacbookPro} />
      <Square value={MacbookPro} />
    </div>
  );
};

export default Home;