import React from "react";
import { NavItem, HeaderContainer } from "components/App.styled";

const headerItems =[
    { href: 'home', text: 'Home' },
    {href: 'movies', text: 'Movies'}
]

const Header = () => {
    return (
        <HeaderContainer>
            {headerItems.map(({ href, text }) => {
             return < NavItem to={href} key={href}>{text}</ NavItem>
            })}
        </HeaderContainer>
    )
};

export default Header;