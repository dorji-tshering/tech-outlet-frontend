import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({match}) => {

	return (
		<div>
			<p>Category container</p>
			<NavLink to={`${match.url}/flower10`}>Samsung Mobiles</NavLink>
		</div>
	)
}

export default Category;
