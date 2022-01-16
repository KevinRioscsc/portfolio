import React from 'react'
import './Footer.css'
import {ReactComponent as YourSvg} from '../Images/github.svg'
import {ReactComponent as YourSvg2} from '../Images/linkedin.svg'
import {ReactComponent as YourSvg3} from '../Images/twitter.svg'
import {ReactComponent as YourSvg4} from '../Images/arrow.svg'
import {animateScroll as scroll, Link} from 'react-scroll'


const Footer = () => {
    const toTop = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return (
        <div className='foot'>
            <footer>
                <YourSvg4 height={40} onClick={toTop} className='mb4 pointer'/>
                <div className="socials">
                    <a href='https://github.com/KevinRioscsc' className='a' target="_blank"><YourSvg className = "pointer " height={40}/></a>
                    <a href='https://www.linkedin.com/in/kevin-rios-16558919a/'  className='a' target="_blank"><YourSvg2 className ="ml3 pointer" height={40}/></a>
                    <YourSvg3 className ="ml3 pointer" height={40}/>
                </div>
                <hr></hr>
                <p className='tc'>© 2022 - Powered by Kevin Rios</p>
            </footer>
        </div>
    )
}

export default Footer
