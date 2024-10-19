import React from 'react';

function ItemListContainer({ greeting }) {
    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
        </div>
    );
}

export default ItemListContainer;