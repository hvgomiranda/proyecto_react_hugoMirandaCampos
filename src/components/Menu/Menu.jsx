import React from "react";
import "./Menu.css";

function Menu()
{
    function hideMenu()
    {
        let menu = document.querySelector(".Menu-btn");
        if(menu.innerHTML === "Menú")
        {
            menu.innerHTML = "X";
        }
        else
        {
            menu.innerHTML = "Menú";
        }
    }

    return(
        <div>
            <h2 onClick={hideMenu} className="Menu-btn">Menú</h2>
        </div>
    )
}

export default Menu;