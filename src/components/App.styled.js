import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
padding-left: 50px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 0px 0px 4px 4px;

`
export const NavItem = styled(NavLink)`
display: flex;
padding: 10px;
font-size: 28px;
margin-right: 10px;
text-align: center;
border-radius: 4px;
text-decoration: none;
color: black;
font-weight: 700;
 

&.active {
    background-color: #e0c7c0;
    color: white;
}

:hover:not(.active),
:focus-visible:not(.active) {
    color: grey;
}
`
export const MoviesList = styled.ul`
display: flex;
flex-direction: column;
`
export const Movie = styled.li`
display: flex;
text-decoration: none;
margin-bottom: 10px;
`

export const MovieLink = styled(NavLink)`
text-decoration: none;
color: black;

&.active {
    background-color: #e0c7c0;
    color: white;
}

:hover:not(.active),
:focus-visible:not(.active) {
    color: grey;
}
`