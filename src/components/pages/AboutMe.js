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
              Hey, I'm Akashdeep Randhawa, an Electrical Engineering Student at the University of British Columbia. I created this webpage to share the various hikes I have climbed and the beautiful views!
          </p>
          <p className='BodyText'>
            I am currently looking for a Summer Co-op opporutinty for 2022. My most recent work employment was an 8 month term as an ASIC Developer at Intel. <br></br> Feel free to reach out to me at <a href="mailto:akashrandhawa@hotmail.com">akashrandhawa@hotmail.com</a> 
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