import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { taskFetch } from '../../dataBase/dataBase.jsx';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    taskFetch()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => console.log('not ok'));
    //.finally(() => console.log("always here"))
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="card w-25 mt-2">
            <div className="card-header">
                {product.name}
            </div>
            <div className='card-body'>
                Categoría: {product.category}<br/>
                Precio: {product.price}
            </div>
            <div className='card-footer'>
                <button className='btn btn-outline-primary w-100'>
                    Detalles
                </button>
            </div>
        
        
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;