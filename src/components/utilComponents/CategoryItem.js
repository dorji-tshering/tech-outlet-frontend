import React from 'react';
import SampleProduct from '../../assets/images/iphone.jpeg';
import styles from '../../styles/utilStyles/Categoryitem.module.css';

const CategoryItem = ({ categoryName }) => {
        return (
                <div className={styles.c_item_container}>
                        <img src={SampleProduct} alt={categoryName} className={styles.c_thumbnail} />
                        <p className={styles.c_name}>{categoryName}</p>
                </div>
        )
}

export default CategoryItem;
