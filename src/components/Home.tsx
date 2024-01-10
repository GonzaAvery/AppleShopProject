import React from 'react'
import { Link } from 'react-router-dom';
import Square from './common/Square';

const Home: React.FC = () => {
  return (
    <div className="flex flex-wrap mt-16">
      <Square value="1" />
      <Square value="2" />
      <Square value="3" />
      <Square value="4" />
    </div>
  );
};
  
  export default Home;