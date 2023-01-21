import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
    return(
        <h1>
            {props.greetings}, {props.name}
        </h1>
    );
}

export default ItemListContainer;