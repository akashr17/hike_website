import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import pdf from "./pages/AR_Resume.pdf"
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    // const showButton = () => {
    //     if(window.innerWidth <= 960){
    //         setButton(false)
    //     } else {
    //         setButton(true)
    //     }
    // };

    //window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className= 'navbar-logo' onClick={closeMobileMenu}>
                        Home <i/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a className='nav-links' href={pdf} target="_blank" onClick={closeMobileMenu}> Resume</a>
                        </li>
                        <li className='nav-item'>
                            <Link to = '/Hikes' className='nav-links' onClick={closeMobileMenu}>
                                Hikes
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = '/AboutMe' className='nav-links' onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        
                    </ul>
                    {/* {button && <Button buttonStyle = 'btn--outline'>Sign Up</Button>} */}
                </div>
            </nav>
        </>
  )
}

export default Navbar