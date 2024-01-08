import React from 'react'
import { Link } from 'react-router-dom';
import Square from './common/Square';

const Home: React.FC = () => {
    return (
      <div>
        <h1>Bienvenido a la tienda de computadoras</h1>
        <Link to="/producto1">
          <Square imagePath="path/to/computer1.jpg" destination="/producto1" />
        </Link>
        <Link to="/producto2">
          <Square imagePath="path/to/computer2.jpg" destination="/producto2" />
        </Link>
        <Link to="/producto3">
          <Square imagePath="path/to/computer3.jpg" destination="/producto3" />
        </Link>
        <Link to="/producto4">
          <Square imagePath="path/to/computer4.jpg" destination="/producto4" />
        </Link>
      </div>
    );
  };
  
  export default Home;