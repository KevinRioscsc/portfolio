import React, {useState} from 'react'
import './HeroSection.css'
import { ReactComponent as YourSvg } from '../Images/laptop3.svg';
import Fade from 'react-reveal/Fade'
import Swing from 'react-reveal/Swing';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () =>{
        setHover(true)
    }
    const notHover = () =>{
        setHover(false)
    }

    return (
        <div className='HeroContainer' >
            <div className="Hero">
            
                <div className="left">
                    <Fade top>
                        <h1>Hi, my name is <span className="lightblue">Kevin Rios</span></h1>
                    </Fade>
                    <Fade bottom>
                        <h1>I am a Full Stack Developer</h1>
                    </Fade>
                </div>
                <div className="right" onMouseEnter={onHover} onMouseLeave={notHover}>
                    <Swing when = {hover}>
                        <p className='hand'>👋</p>
                    </Swing>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1642142341">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}

export default HeroSection
