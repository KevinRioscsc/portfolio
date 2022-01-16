import React from 'react'
import { SidebarContainer, Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SideBarElements'
const SideBar = ({isOpen,toggle}) => {
    return (
        <div>
        <SidebarContainer isOpen = {isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to = "About" onClick={toggle}>
                        About
                   </SidebarLink>
                   <SidebarLink to = "projects" onClick={toggle}>
                        Project
                   </SidebarLink>
                   <button>Lets Work</button>
               </SidebarMenu>
               
           </SidebarWrapper>
       </SidebarContainer>
        </div>
    )
}

export default SideBar
