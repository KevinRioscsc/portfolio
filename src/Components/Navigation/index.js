import React from 'react'
import './Navigation.css'
import { SidebarLink } from './NavigationElement';
import { Link } from 'react-router-dom';
import { MobileIcon } from './NavigationElement';
import {FaBars} from 'react-icons/fa';

const Navigation = ({toggle}) => {
    return (
        <div id='Home'>
             <MobileIcon onClick = {toggle}>
                        <FaBars/>
                </MobileIcon>
            <nav>
                <div className="logo">
                    <h1>Krios</h1>
                </div>
               
                <ul>
                   
                    <li>
                    <SidebarLink to = "About"  smooth = {true} duration = {500} spy = {true} exact = 'true' >
                        About
                   </SidebarLink>
                   
                    </li>
                    <li>
                    <SidebarLink to = "projects"  smooth = {true} duration = {500} spy = {true} exact = 'true' >
                       Projects
                   </SidebarLink>
                    </li>
                    
                </ul>
                <div >
                    <Link to = "/LetsWorkTogether">
                        <button>Lets Work</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
