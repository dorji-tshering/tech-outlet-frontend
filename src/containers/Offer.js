import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const Offer = () => {
    const match = useRouteMatch();

	return (
		<div>
		<p>offertemplate</p>
		
		<ul>
			<li key={`${match.url}`}><NavLink 
			to={`${match.url}/product-id`}>Iphone
			</NavLink></li>
		</ul>            
		</div>
	)
}

export default Offer;
