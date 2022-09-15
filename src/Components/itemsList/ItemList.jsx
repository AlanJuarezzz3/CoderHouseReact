import React from 'react';
import Item from './Item';

const ItemList = ({listProducts}) => {
  return (
    <div className='mapacarta'>
    {listProducts.map((product) => (
        <Item product={product} key ={product.id}/>
    ))}
    </div>
  );
};

export default ItemList;