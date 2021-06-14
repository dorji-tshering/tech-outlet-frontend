import React from 'react'
import { NavLink } from 'react-router-dom'
import CategoryItem from '../utilComponents/CategoryItem';
import styles from '../../styles/homeStyles/Categories.module.css';

const Categories = (match) => {
	const categories = ["Footwear", "Cloths", "Home", "Mobile",
				"Laptops", "Toilet", "Electronics", "Kitchen",
					"Men", "Women", "Children"];
	return (
		<div className={styles.categories}>
			{ categories.map((category, i) => 
				<NavLink to={`/category/${category}`} key={i} className={styles.c_item}>
					<CategoryItem categoryName={category} />
				</NavLink>
			)}
		</div>
    )
}

export default Categories;
