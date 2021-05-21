import React from 'react';
import SampleProduct from '../../assets/images/iphone.jpeg';
import '../../styles/utilStyles/categoryitem.css';

const CategoryItem = ({ categoryName }) => {
        return (
                <div className="c-item-container">
                        <img src={SampleProduct} alt={categoryName} className="c-thumbnail" />
                        <p className="c-name">{categoryName}</p>
                </div>
        )
}

export default CategoryItem;
