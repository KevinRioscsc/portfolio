import React from 'react'
import './AboutMe.css'
import Fade from 'react-reveal/Fade';
import profile from '../Images/profilepic.jpg'
import {ReactComponent as YourSvg} from '../Images/github.svg'
import {ReactComponent as YourSvg2} from '../Images/linkedin.svg'
import {ReactComponent as YourSvg3} from '../Images/twitter.svg'

const AboutMe = () => {
    return (
        <div className = "About" id='About'>
            <section>
                <div className="header">
                <Fade>
                <h1 className='title'>About Me</h1>
                </Fade>
                </div>

                <div className="flex2">
                    <Fade bottom>
                        <div className="card mb4" >
                            <div class="flip-card ">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front shadow-2">
                                    <img src={profile} alt="Avatar" height={400}/>
                                    </div>
                                    <div class="flip-card-back shadow-2">
                                    <h1>Kevin Rios</h1>
                                    <p>Full Stack Engineer</p>
                                    <div className="socials">
                                        <a href='https://github.com/KevinRioscsc' target="_blank"><YourSvg className = "pointer" height={30}/></a>
                                        <a href='https://www.linkedin.com/in/kevin-rios-16558919a/' target="_blank"><YourSvg2 className ="ml3 pointer" height={30}/></a>
                                        <YourSvg3 className ="ml3 pointer" height={30}/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="aboutDes">
                            <p>I am a Full Stack Developer that has a passion to exceed the expectactions of others. A hardworking and driven person that strives for more than just getting the work done. I have an ability to learn and pick up new languages pretty fast and I can adapt to any work condition and excel in any environment I am thrown in.</p>
                            <p>My goal is to create meaningful projects that give me a sense of pride and happiness when I deploy them. What hooked me into programming is that rush you get when you solve a bug that was messing with you or finally completing an algorithm that you were working on. This problem solving is what pushes me to keep learning new things and as I result it keeps me from being stagnant</p>
                            
                        </div>
                    </Fade>
                   
                    
                </div>

            </section>
        </div>
    )
}

export default AboutMe
