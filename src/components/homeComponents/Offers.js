import React from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation, EffectCube } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/effect-cube/effect-cube.min.css"
import '../../styles/homeStyles/offers.css';
import Offer1 from '../../assets/images/offer.jpg';
import Offer2 from '../../assets/images/offer2.jpg';
import Offer3 from '../../assets/images/offer3.jpg';

SwiperCore.use([Autoplay, EffectCube, Pagination, Navigation]);

const Offers = ({ routes }) => {
	const offers = [Offer1, Offer2, Offer3];
	

	return (
		<div className="offer-container">
			<Swiper spaceBetween={30} slidesPerView={1} loop={true} centeredSlides={true} autoplay={{"delay": 2500,
				"disableOnInteraction":false}} pagination={{"clickable": true}}
				navigation={true} effect={"cube"} cubeEffect={{
					"shadow": true,
					"slideShadows": true,
					"shadowOffset": 2,
					"shadowScale": 0.94
				}}>
				{ offers.map((offer, i) =>
					<SwiperSlide key={i}>
						<NavLink to={`/offers/${i}`} className='slide' >
							<img src={offer} alt={offer} className="offer-image" />
						</NavLink>
					</SwiperSlide>
				)}
			</Swiper>		
		</div>
	)
}

export default Offers;
