import '../../App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import '../Button.css';

import background from './bg.jpg'

function Home() {
  return (
    <div className='Wrapper'>
        
        <h1 className='Header'>
          Best of Beautiful BC
        </h1>
        <p className='BodyText'>
            Come explore the beautiful hikes in the lower-mainland of British Columbia. To get started on your adventure, hit the button below!
        </p>
        <div className='PicWrap'>
          <p className = 'BodyText2'> <Link to ="/Hikes"><button className='Button'>
              {"View Hikes"}
            </button> </Link>
          </p>
        </div>
    </div>
  );
}

export default Home;



