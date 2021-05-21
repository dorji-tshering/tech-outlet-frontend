import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/productStyles/product.css';

const Product = () => {
	return (
		<div className="product-container">
			<h2>Reached Product Section</h2>
			<NavLink to="/cart">Add to Cart</NavLink>
				<br/>
			<NavLink to="/">Buy Now</NavLink>
		</div>
	)
}

export default Product;
