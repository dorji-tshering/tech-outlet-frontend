import {useState} from 'react';
import MobileNav from '../components/utilComponents/MobileNav';
import Offers from '../components/homeComponents/Offers';
import styles from '../styles/containerStyles/Home.module.css';
import Categories from '../components/homeComponents/Categories';
import MediaQuery from 'react-responsive';
import Deals from '../components/homeComponents/Deals';

const Home = () => {

    	return (
		<div className="home">
			<MediaQuery maxDeviceWidth={768}>
				<MobileNav/>
			</MediaQuery>
			<section>
				<Categories/>
				<Offers/>
				<Deals/>
			</section>
        	</div>
    	)
}

export default Home;
