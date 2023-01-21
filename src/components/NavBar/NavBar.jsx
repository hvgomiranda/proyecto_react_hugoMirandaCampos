import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() 
{
    return(
        <div className="NavBar-general">
            <ul className="NavBar-menu">
                <li><a href="#">Menú</a></li>
                <li><a href="#">Comidas</a></li>
                <li><a href="#">¿Dónde estamos?</a></li>
                <li><a href="#">Información</a></li>
            </ul>
            <h1 className="NavBar-logo">Dragón Porteño</h1>
            <CartWidget className="NavBar-Cart"/>
        </div>
    );
}

export default NavBar;