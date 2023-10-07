// import React from 'react';

import img from '../assets/img/banner.jpeg'
// import './Card.css'; // You can create a separate CSS file for styling

const Card = () => {

  return (
    <div className="card">
      <div className='w- h-36 bg-'>
        <img src={img} alt="as" />
        <div>
            <h2>Earth Level</h2>
        </div>
      </div>
  
    </div>
  );
};




export default Card;
