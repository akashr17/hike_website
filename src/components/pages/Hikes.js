import '../../App.css';
import './hikes.css';
import dog from './Photos-001/dog.HEIC'
import chief from './Photos-001/chief.JPG'
import React from 'react'

function Hikes() {
  return (
    <div className='Wrap'>
      <div className='Pic'>
          <img src={chief} />
          <img src={chief} />
          <img src={chief} />
          <img src={chief}  />
          <img src={chief} />
      </div>
      
    </div>
  );
}

export default Hikes;