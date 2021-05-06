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
                <input
                    type="text"
                    id="header-search"
                    placeholder="search Products and Brands" 
                />
                <button type="submit"><ImSearch className="search-button"/></button>
            </form>
        </div>
    )
}

export default Search;
