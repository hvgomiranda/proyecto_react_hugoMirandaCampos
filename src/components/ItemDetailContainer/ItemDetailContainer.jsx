import React from 'react';
import { useParams } from "react-router-dom";
import { data } from "../../dataBase/dataBase";

function ItemDetailContainer()
{

    const { idProducto } = useParams();

    const product = data[idProducto-1];

    return(
        <div>
            <div key={product.id} className="card w-25 mt-2">
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