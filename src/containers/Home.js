import {useState} from 'react';
import MobileNav from '../components/utilComponents/MobileNav';
import Offers from '../components/homeComponents/Offers';
import styles from '../styles/containerStyles/Home.module.css';
import Categories from '../components/homeComponents/Categories';
import MediaQuery from 'react-responsive';
import Deals from '../components/homeComponents/Deals';
import Search from '../components/homeComponents/Search';

const Home = () => {
	const [active, setInActive] = useState(true);

    	return (
		<div className={active ? `${styles.home_active}` : `${styles.home_inactive}`}>
		<section className={styles.nav_and_category}>
			<MediaQuery maxDeviceWidth={768}>
				<MobileNav setInActive={setInActive} active={active}/>
				<Search/>
			</MediaQuery>
				<Categories/>
		</section>
				<Offers/>
				<Deals/>

        	</div>
    	)
}

export default Home;
