import React from "react";
import "./CartWidget.css";
import { IconContext } from "react-icons";
import { BsCart } from "react-icons/bs";


function CartWidget()
{
    return(
        <div className="CartWidget-general">
            <IconContext.Provider value={{ color: "black", size: "1.5rem"}}>
                <BsCart />
            </IconContext.Provider>
            <p>[1]</p>
        </div>
    );
}

export default CartWidget;

