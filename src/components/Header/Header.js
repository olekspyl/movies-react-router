import React from "react";
import { Link } from "react-router-dom";

const headerItems =[
    { href: 'home', text: 'Home' },
    {href: 'movies', text: 'Movies'}
]

const Header = () => {
    return (
        <div>
            {headerItems.map(({ href, text }) => {
             return <Link to={href} key={href}>{text}</Link>
            })}
        </div>
    )
};

export default Header;