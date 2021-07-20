import { useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation,Thumbs } from 'swiper/core';
import Iphone from '../../assets/images/iphone.jpeg';
import "swiper/swiper.min.css";			// import swiper styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import '../../styles/productStyles/product.css';
import { NavLink, useParams } from 'react-router-dom';


SwiperCore.use([Navigation,Thumbs]);


const Product = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const productImages= [Iphone, Iphone, Iphone, Iphone];
	const { productId } = useParams();
	
	const availableColors = ['Green', 'Blue', 'Red', 'Yellow', 'Purple'];
	const availableSizes = ['S', 'M', 'L', 'XL'];
	let maxQuantity = 10;
	const quantityArray = [];

	// craete an array containing quantity values
	for(let i=1; i<=maxQuantity; i++) {
		quantityArray.push(i);
	}

	// product states
	const [color, setColor] = useState();
	const [size, setSize] = useState(null);
	const [quantity, setQuantity] = useState(1);

	const addToCart = () => {
		alert("Successfully added to cart with: " + color + size + quantity);
	}


	return (
		<div className="product_container">
			<section className="image_container">
				<Swiper style={{'--swiper-navigation-color': 
				'#fff','--swiper-pagination-color': '#fff'}}
				spaceBetween={10} navigation={true}  thumbs={{ swiper: thumbsSwiper }}
				className="mySwiper2">
					{productImages.map((image, i) => 
						<SwiperSlide key={Math.random()}>
							<img src={image} alt="iphone" />
						</SwiperSlide>
					)}
				</Swiper>
				<Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} 
				freeMode={true}
				watchSlidesVisibility="true" watchSlidesProgress="true" className="mySwiper">
					{productImages.map((image, i) =>
						<SwiperSlide key={Math.random()}>
							<img src={image} alt="iphone" />
						</SwiperSlide>	
					)}
				</Swiper>
			</section>
			
			<section className="product_specifics">
				<h3>Apple Iphone 7 Plus 64GB Factory Unlocked 4G LTE iOS Smartphone</h3>
				<strong><em className="product_price">Nu. 50,000 + Nu. 50 for shipping</em></strong>
				<p className="product_delivery_time">Estimated delivery-time: 3 Days</p>				

			</section>
			<section className="product_options">
				<section className="colors">
					<p className="product_specific_title">Colors:</p>
					<section className='product_colors'>
						{availableColors.map((color, idx) => 
						<section className='product_color' key={idx}>
							<label htmlFor={color}>{color}</label>
							<input type='radio' id={color} name='product_color' 
							value={color} checked={() => setColor(color)} />
						</section>
						)}
					</section>
				</section>
				<hr/>
				<section className="sizes">
					<p className="product_specific_title">Sizes:</p>
					<section className="product_sizes">
						{availableSizes.map((size, idx) =>
							<section className='product_size' key={idx}>
								<label htmlFor={size}>{size}</label>
								<input type='radio' id={size} name='size' 
								value={size} />
							</section>	
						)}
					</section>
				</section>
				<hr/>
				<section className="product_quantity">
					<p className="product_specific_title">Quantity:</p>
					<select
					onChange={() => console.log()} className="select_quantity">
						{quantityArray.map((quantity, idx) =>
							<option value={quantity} key={idx}>{quantity}</option>	
						)}
					</select>
				</section>
			</section>
			<section className="user_options">
				<NavLink to={`/checkout/${productId}`} className="checkout">BUY IT NOW</NavLink>
				<button onClick={addToCart} className="to_cart">ADD TO CART</button>
			</section>
			<section className="product_detail_section">
				<h3 className="product_detail_title">About this product</h3>.
				<section className="product_details">
					<section className="p_table_row">
						<p>Attribute</p>
						<p>Value</p>
					</section>
					<section className="p_table_row">
						<p>Attribute</p>
						<p>Value</p>
					</section><section className="p_table_row">
						<p>Attribute</p>
						<p>Value</p>
					</section>
					<section className="p_table_row">
						<p>Attribute</p>
						<p>Value</p>
					</section><section className="p_table_row">
						<p>Attribute</p>
						<p>Value</p>
					</section>
				</section>
				<NavLink to={`/product/${productId}/details`} 
				className="full_product_details">
					View Full Details
				</NavLink>
			</section>
			<section className="related_products">
				<h3>Related products</h3>
				<section className="related_product_images">
					{productImages.map((image, i) => 
						<NavLink to={`/product/${i}`} key={Math.random()} 
						className="related_product_link">
							<img src={image} alt="iphone" className="related_product_image"/>
							<p className="price">Nu.700</p>
						</NavLink>
					)}
				</section>
			</section>
			<section className="may_also_like">
				<h3>You may also like</h3>
				<section className="may_like_product_images">
					{productImages.map((image, i) => 
						<NavLink to={`/product/${i}`} key={Math.random()}
						className="may_like_product_link">
							<img src={image} alt="iphone" className="may_like_product_image" />
							<p className="price">Nu.600</p>
						</NavLink>
					)}
				</section>
						
			</section>
		</div>
	)
}

export default Product;
