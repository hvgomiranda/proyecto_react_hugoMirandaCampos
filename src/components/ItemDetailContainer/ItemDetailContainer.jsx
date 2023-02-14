import React from 'react';
import { useParams, useLocation } from "react-router-dom";
import { data } from "../../dataBase/dataBase";

const ItemDetailContainer = () =>
{

    const location = useLocation();
    const product = location.state?.data;

    return(
        <div>
            <div className="card w-25 mt-2">
                <div className="card-header">
                    {product.name}
                </div>
                <div className='card-body'>
                <img src={product.img} alt="foto" className='w-100'/>
                    Categoría: {product.category}<br/>
                    Precio: {product.price}
                </div>
            </div>
        </div>
    )
};

export default ItemDetailContainer;