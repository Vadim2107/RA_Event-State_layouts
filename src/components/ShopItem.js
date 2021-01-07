import React from 'react';
import Button from './Button';

const ShopItem = props => {
    const { name, price, color, img  } = props;
    
    return (
        <div className="shop-item">
            <div className="thumb">
                <figure>
                    <img src={img} alt={name}/>
                </figure>
            </div>
            <div className="title">
                {name}
            </div>
            <div className="desc">
                {color}
            </div>
            <div className="price">
                {price}
            </div>
            <Button label="Add to cart" />
        </div>
    );
};

export default ShopItem;
