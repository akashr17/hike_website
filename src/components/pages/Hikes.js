import '../../App.css';
import './hikes.css';
import dog from './Photos-001/dog.HEIC'
import chief from './Photos-001/chief.JPG'
import chief2 from './Photos-001/chief.HEIC'
import creek from './Photos-001/creek.JPG'
import eagle from './Photos-001/Eagle.JPG'
import lindman from './Photos-001/lindman.JPG'
import trestle from './Photos-001/trestle.JPG'
import React from 'react'

function Hikes() {
  return (
    <div className='Wrap'>
      <div className='Header'>
        Hover on the pictures for the name of the Hike!
      </div>
      <div className='Pic'>
          <img src={chief} />
          <p>
            Stawamus Chief
          </p>
      </div>
      <div className='Pic'>
          <img src={dog} />
          <p>
            Tunnel Bluffs
          </p>
      </div>
      <div className='Pic'>
          <img src={chief2} />
          <p>
            Dog Mountain
          </p>
      </div>
      <div className='Pic'>
          <img src={creek} />
          <p>
            Coquihalla River
          </p>
      </div>
      <div className='Pic'>
          <img src={eagle} />
          <p>
            Eagle's Bluff
          </p>
      </div>
      {/* <div className='Pic'>
          <img src={lindman} />
          <p>
            testing
          </p>
      </div> */}
      <div className='Pic'>
          <img src={trestle} />
          <p>
            Ladner Creek Trestle
          </p>
      </div>
    </div>
  );
}

export default Hikes;