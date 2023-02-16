import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import Menu from "../Menu/Menu";
import { Link, NavLink } from "react-router-dom";

function NavBar() 
{
    return(
        <div className="NavBar-general">
            <Menu />
            <h1 className="NavBar-logo">
                <Link to="/">
                    Dragón Porteño
                </Link>
            </h1>
            <NavLink to="/category/calzado">
                Calzado
            </NavLink>
            <NavLink to="/category/pantalones">
                Pantalones
            </NavLink>
            <CartWidget className="NavBar-Cart"/>
        </div>
    );
}

export default NavBar;