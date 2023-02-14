import React from 'react';
import { useParams, useLocation, Link } from "react-router-dom";
import { data } from "../../dataBase/dataBase";
import ItemListContainer from '../ItemListContainer/ItemListContainer';

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
                <Link to={"/"} element={<ItemListContainer />} >
                <button className='btn btn-outline-primary w-100'>
                    Volver
                </button>
              </Link>
            </div>
        </div>
    )
};

export default ItemDetailContainer;