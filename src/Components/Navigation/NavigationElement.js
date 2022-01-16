import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%,60%);
        font-size:1.8rem;
        cursor:pointer;
        color:#FFF;
    }
`;
export const SidebarLink = styled(LinkS)`
    cursor:pointer;
`