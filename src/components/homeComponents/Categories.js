import React from 'react'
import { NavLink } from 'react-router-dom'
import CategoryItem from '../utilComponents/CategoryItem';
import '../../styles/homeStyles/categories.css';

const Categories = (match) => {
	const categories = ["Footwear", "Cloths", "Home", "Mobile",
				"Laptops", "Toilet"];
	return (
		<div className="categories">
			{ categories.map((category, i) => 
				<NavLink to={`/category/${category}`} key={i} className="c-item">
					<CategoryItem categoryName={category} />
				</NavLink>
			)}
		</div>
    )
}

export default Categories;
