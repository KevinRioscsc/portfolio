import React, {useState} from 'react'
import Navigation from '../Navigation/index';
import HeroSection from '../HeroSection';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import {projectAll} from '../../Data'
import Footer from '../Footer';
import SideBar from '../SideBar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navigation toggle ={toggle}/>
            <HeroSection/>
            <AboutMe/>
            <h1 className='project_title white tc f1 mt5 mb0'>PROJECTS</h1>
            {
                projectAll.map((item, index) => {
                    return  <Projects projectName = {item.projectName} projectDesc = {item.projectDesc} projectImage = {item.projectImg} projectLive ={item.projectLive} projectSource = {item.projectSource} />
                })
            }
           
            <div className="mb6"></div>
            <Footer/>
        </div>
    )
}

export default Home
