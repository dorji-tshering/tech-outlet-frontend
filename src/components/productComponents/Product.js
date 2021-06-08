import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Iphone from '../../assets/images/iphone.jpeg';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import '../../styles/productStyles/product.css';

import SwiperCore, { Navigation,Thumbs } from 'swiper/core';

SwiperCore.use([Navigation,Thumbs]);


const Product = () => {

	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className="offer-container">
			<Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}}
			spaceBetween={10} navigation={true}  thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
				<SwiperSlide><img src={Iphone} alt="iphone" /></SwiperSlide>
				<SwiperSlide><img src={Iphone} alt="iphone" /></SwiperSlide>
				<SwiperSlide><img src={Iphone} alt="iphone" /></SwiperSlide>
				<SwiperSlide><img src={Iphone} alt="iphone" /></SwiperSlide>		
			</Swiper>
			<Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true}
			watchSlidesVisibility="true" watchSlidesProgress="true" className="mySwiper">
				<SwiperSlide><img src={Iphone} alt="iphone" /></SwiperSlide>
				<SwiperSlide><img src={Iphone} alt="iphone" /></SwiperSlide>
				<SwiperSlide><img src={Iphone} alt="iphone" /></SwiperSlide>
				<SwiperSlide><img src={Iphone} alt="iphone" /></SwiperSlide>
			</Swiper>			
		</div>
	)
}

export default Product;
