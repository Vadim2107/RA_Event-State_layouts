import React from 'react';
import ShopItem from './ShopItem';

const ListView = props => {
    const {items} = props;

    const renderItems = (items) => {
        return items.map((item, i) => {            
            return (
                <li className="list-item" key={`li-${i}`}>
                    <ShopItem
                        name={item.name}
                        price={item.price}
                        color={item.color}
                        img={item.img} />                    
                </li>
            );
        });
    };

    return (
        <ul className="list">
            {renderItems(items)}
        </ul>
    );
};

export default ListView;
