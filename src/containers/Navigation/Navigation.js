import React from "react";
import { NavBar, NavItem, NavUl } from './Navigation.styles';
import { NavLink } from "react-router-dom";

const Navigation = () => (

    <NavBar>
        <NavUl>
            <NavItem>
                <NavLink exect to="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink exect to="/catalogue">Catalogue</NavLink>
            </NavItem>
            <NavItem>
                <NavLink exect to="/cart">Cart</NavLink>
            </NavItem>
        </NavUl>
    </NavBar>


);

export default Navigation;