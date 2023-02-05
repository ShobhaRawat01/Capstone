import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {

  return (
    <div className='hero-container'>
      {/* <img src='/videos/airlines-credit-cards-BAIRCCS0522-ca89294200aa42e7b5cfbf0a9732fdfe.webp'/> */}
      <video src='/videos/video-5.mp4' autoPlay loop muted />
      {/* <h1>Infinite Journey Card</h1> */}
      <p>One card, endless possibilities.</p>
      <div className='hero-btns'>
        <Button className='btns'buttonStyle='btn--outline'
          buttonSize='90px' onClick={() => {window.location.href="/Register"}}>GET STARTED</Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      {/* </div> */}
    </div>
    </div>
  );
}

export default HeroSection;
