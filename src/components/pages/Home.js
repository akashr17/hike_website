import '../../App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import '../Button.css';
import './Home.css';
import background from './bg.jpg'

function Home() {
  return (
    <div className='Container'>
      <div className = 'bg'>
        <div className='Wrapper'>
            <h1 className='Header'>
                Akashdeep Randhawa
            </h1>
            <p className='BodyText'>
                Website project
            </p>
            <Link to ="/GetStarted"><button className='btn'>
                {"Get Started  "}
            </button> </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;



