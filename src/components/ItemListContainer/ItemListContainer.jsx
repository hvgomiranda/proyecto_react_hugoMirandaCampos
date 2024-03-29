import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { taskFetch } from '../../dataBase/dataBase.jsx';
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer.jsx";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  console.log(category)

  useEffect(() => {
    if(category)
    {
      taskFetch()
      .then((res) => {
        setProducts(res.filter(product => product.category === category))
      })
      .catch((error) => console.log("not ok"));     
    }
    else
    {
      taskFetch()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => console.log('not ok'));
    }
  }, [category]);

  return (
    <div style={{display: "flex", flexDirection: "row", flexWrap:"wrap"}}>
      {products.map((product) => (
        <div key={product.id} className="card w-25 mt-2">
            <div className="card-header">
                {product.name}
            </div>
            <div className='card-body'>
              <img src={product.img} alt="foto" className='w-100'/>
                Categoría: {product.category}<br/>
                Precio: {product.price}
            </div>
            <div className='card-footer'>
              <Link to={`/details/${product.name}`} element={<ItemDetailContainer />} state={{data: product}} >
                <button className='btn btn-outline-primary w-100'>
                    Detalles
                </button>
              </Link>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;