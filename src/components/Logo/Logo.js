import React from 'react';
import Tilt from 'react-tilt';
import raptor from './raptor.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="m4 mt0 pa3">
      <Tilt className="Tilt br-100 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
          <img alt='logo' src={raptor}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;