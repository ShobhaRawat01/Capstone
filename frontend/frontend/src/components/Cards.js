import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from "react-router-dom";


function Cards() {
  return (
    <div className='cards'>
      <h1 className= 'cardheading' style={{fontSize: '30px'}}>Check out Our Travel Cards!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/card1.png'
              text={<div className="card-text">Good for - low rates on spending.<br/> 
              Low rates on purchases and balance transfers<br/>
              No balance transfer fees<br/>
              No foreign transaction fees on purchases

              </div>}

              label='Travel Reward Card'
              path='/services'
            />
            <CardItem
              src='images/card2.png'
              text={<div className="card-text">Good for - Rewards at home and abroad.<br/> 
              1% back in Rewards on supermarket spend (0.5% at their petrol stations and everywhere else)<br/>
              Annual fee refunded if you have a Reward Black current account<br/>
              No foreign transaction fees on purchases

              </div>}
              label='Travel Black Reward Card'
              path='/services'
            />
          </ul>
          <h1 className=''>Other ways we can help!</h1><br/>


          <ul className='cards__items'>
            <CardItem
              src='images/managecard.png'
              text={<div className="card-text">We've got some useful ways to help you get the most out of your existing card.<br/> 
              Find out how to make a payment, view your transactions, change your credit card or take out a new one and more.<br/>
              
              </div>}
              label='Manage your Card'
              path='/manageyourcard'
            />
            <CardItem
              src='images/cardloan.png'
              text={<div className="card-text">You earn points whenever you use your Reward credit card and these points are known as Rewards.<br/> 
              You'll also be given personalised monthly spend offers from some of our partner retailers.<br/>

              
              </div>}
              label='Rewards and Offers'
              path='/rewards'
            />
            <CardItem
              src='images/cardsecurity.png'
              text={<div className="card-text">Empowering you in the fight against fraud.<br/> 
              If you're concerned about being unable to make your repayments on your NatWest credit card, we have lots of guidance and support to help you.
              <br/> 

              
              </div>}
              label='Security and Support for you'
              path='/security'
            />
          </ul>
        </div>
      </div>
      <div class="contactcontent">
           
      <h3>Something else we can help you with?</h3>
      
    </div>
    <div class= "contactbutton">
      <Link to="/Contactus" style={{ width: "40vw" }}>
      <button className= "loginbutton btn btn" style={{width: '20vw' }}id="btnLogin"> Contact Us</button>
      </Link>
      </div>
    </div>
    
  
  );
}

export default Cards;
