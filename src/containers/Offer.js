import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Iphone from '../assets/images/iphone.jpeg';
import styles from '../styles/containerStyles/Offer.module.css';

const Offer = () => {
	const { offerId } = useParams();
	console.log("Offer component");

	const offerProducts = [Iphone, Iphone, Iphone, Iphone,
				Iphone, Iphone, Iphone, Iphone];

	return (
		<div className={styles.offer_container}>
			<h3>Offer {offerId}</h3>
		        <section className={styles.offer_products}>
				{offerProducts.map((image, i) => 
					<NavLink to={`/product/${i}`} key={Math.random(1000)} 
					className={styles.product}>
						<img src={image} alt="product" className={styles.product_image} />
						<p className={styles.product_price}>Nu.800</p>
					</NavLink>
				)}
			</section>
		</div>
	)
}

export default Offer;
