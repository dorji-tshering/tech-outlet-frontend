import React from 'react'
import styles from '../../styles/homeStyles/Search.module.css';
import { ImSearch } from 'react-icons/im';

const Search = () => {
    return (
		<div className={styles.search_container}>
			<form action="/" method="get">
				<label htmlFor="header-search">
				<span className={styles.visually_hidden}>search products, brands, and more</span>
				</label>
				<section className={styles.search}>
					<input
					type="search"
					name="search"
					id="header-search"
					placeholder="search Products and Brands" 
					className={styles.search_term}
					/>
					<button type="submit" className={styles.button}>
						<ImSearch className={styles.search_button}/>
					</button>
				</section>
			</form>
		</div>
    )
}

export default Search;
