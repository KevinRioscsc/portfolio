import React, {useState} from 'react'
import Navigation from '../Navigation/index';
import HeroSection from '../HeroSection';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import {project1, project2, project3} from '../../Data'
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
            <Projects projectName = {project1.projectName} projectDesc = {project1.projectDesc} projectImage = {project1.projectImg} projectLive ={project1.projectLive} projectSource = {project1.projectSource} />
            <Projects projectName = {project2.projectName} projectDesc = {project2.projectDesc} projectImage = {project2.projectImg} projectLive ={project2.projectLive} projectSource = {project2.projectSource} />
            <Projects projectName = {project3.projectName} projectDesc = {project3.projectDesc} projectImage = {project3.projectImg} projectLive ={project3.projectLive} projectSource = {project3.projectSource} />
            <div className="mb6"></div>
            <Footer/>
        </div>
    )
}

export default Home
