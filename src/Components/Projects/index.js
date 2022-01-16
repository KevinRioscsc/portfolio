import React from 'react'
import './Projects.css'
import Fade from 'react-reveal/Fade';


const Projects = ({projectName, projectDesc, projectImage, projectLive, projectSource}) => {
    return (
        <div>
            <div className="project " id='projects'>
               
                <div className="project-flex mt5">
                    <Fade left>
                        <div className="left-side">
                            <h1 className="title_project white">{projectName}</h1>
                            <p className='white line'>{projectDesc}</p>
                            <a href={projectLive}  target="_blank" className='hidden'><button >See Live</button></a>
                            <a href={projectSource}  target="_blank" className='ml3 hidden'>Source Code</a>
                        </div>
                    </Fade>
                    <div className="right-side">
                        <Fade right>
                            <div className="card-wrap">
                                <img src={projectImage} alt="" />
                                <div className="overlay">
                                    <div className="click">
                                        <a href={projectLive}  target="_blank"><button >See Live</button></a>
                                        <a href={projectSource}  target="_blank" className='ml3'>Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
