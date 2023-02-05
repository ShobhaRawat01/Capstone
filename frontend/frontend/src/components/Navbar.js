import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

export default function Navbar () {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

useEffect(() => {
  if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
  } 
}, [isAuthenticated])

const logout = () => {
  localStorage.clear();
  setIsAuthenticated(false);

  window.location.href = "/Login";
}

let user = (localStorage.getItem('inputvalue'))
console.log(user);

  return (
    
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src='images/Natwest-navbar.png'/>
            Natwest Card
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className='navbarposition'>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Contactus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contactus
              </Link>
            </li>
            {isAuthenticated ?

<>

          <li 
          className='nav-item'> 
          <Link to='' onClick={logout} className='nav-links'> Logout </Link>
          </li>

          <li 
          className='nav-item'> 
          <Link to='/dashboard' onClick={() => {window.location.href="/dashboard"}} className='nav-links'> Dashboard </Link>
          </li>

</>
:
<>      
            <li className='nav-item'>
              <Link
                to='/Login'
                className='nav-links12'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>

            <li>
              <Link to='/Register' 
                className='nav-links'onClick={closeMobileMenu}>Sign Up</Link>
            </li>
</>
}
          </ul>
          </div>

        </div>
      </nav>
  
  );
}

