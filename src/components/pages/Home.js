import '../../App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import '../Button.css';

import background from './bg.jpg'

function Home() {
  return (
    <div className='Wrapper'>
        
        <div className='Header'>
          Best of Beautiful BC
        </div>
        <div className='BodyText'>
            Come explore the beautiful hikes in the lower-mainland of British Columbia. To get started on your adventure, hit the button below!
        </div>
        
        <Link to ="/Hikes"><button className='Button'>
            {"View Hikes"}
          </button> </Link>
        
        
    </div>
  );
}

export default Home;



