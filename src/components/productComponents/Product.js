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
	//const [size, setSize] = useState(null);
	//const [quantity, setQuantity] = useState(null);


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
				<section className="product_colors">
					<p className="product_specific_title">Colors:</p>
					<section className="colors">
						<p className="red">Red</p>
						<p className="green" >Green</p>
						<p className="blue" >Blue</p>
						<p className="black" >Black</p>
					</section>
				</section>
				<section className="product_sizes">
					<p className="product_specific_title">Sizes:</p>
					<section className="sizes">
						<p>4</p>
						<p>5</p>
						<p>6</p>
						<p>7</p>
					</section>
				</section>
				<section className="product_quantity">
					<p className="product_specific_title">Quantity</p>
					<select value="stateful value" 
					onChange={() => console.log('updated')} className="select_quantity">
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>
				</section>
			</section>
			<section className="user_options">
				<NavLink to={`/checkout/${productId}`} className="checkout">BUY IT NOW</NavLink>
				<NavLink to={`/cart/${productId}`} className="to_cart">ADD TO CART</NavLink>
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
