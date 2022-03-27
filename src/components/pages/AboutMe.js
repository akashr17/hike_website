import '../../App.css';
import AR from './pic.jpg'
import React from 'react'

function AboutMe() {
  return (
    <>
      <div className='Wrapper'>
          <h1 className='Header'>
              About Me
          </h1>
          
          <p className='BodyText'>
              My name is Akashdeep Randhawa and I am an Electrical Engineering Student at University of British Columbia. I created this webpage to share the various hikes I have climbed and the beautiful views!
          </p>
          <div className='PicWrap'>
            <div className='Picture'>
              <img src={AR}/>
            </div>
          </div>
      </div>
    </>
  );
}

export default AboutMe;