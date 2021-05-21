import React from 'react'
import '../../styles/homeStyles/search.css';
import { ImSearch } from 'react-icons/im';

const Search = () => {
    return (
		<div className="search-field">
			<form action="/" method="get">
				<label htmlFor="header-search">
				<span className="visually-hidden">search products, brands, and more</span>
				</label>
				<div className="search">
					<input
					type="search"
					name="search"
					id="header-search"
					placeholder="search Products and Brands" 
					className="search-term"
					/>
					<button type="submit" className="button"><ImSearch className="search-button"/></button>
				</div>
			</form>
		</div>
    )
}

export default Search;
