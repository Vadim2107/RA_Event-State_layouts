import React from 'react';
import ShopCard from './ShopCard';

const CardsView = (props) => {
    const { cards } = props;    
    const renderCards = (cards) => {
        return cards.map((card, i) => {
            return (                
                <div className="col" key={`card-${i}`}>
                    <ShopCard
                        name={card.name}
                        price={card.price}
                        color={card.color}
                        img={card.img} />
                </div>
            );
        });
    };

    return (
        <div className="row">
            {renderCards(cards)}
        </div>
    );
};

export default CardsView;
