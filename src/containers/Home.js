import {useState} from 'react';
import MobileNav from '../components/utilComponents/MobileNav';
import Offers from '../components/homeComponents/Offers';
import styles from '../styles/containerStyles/Home.module.css';
import Categories from '../components/homeComponents/Categories';
import MediaQuery from 'react-responsive';
import Deals from '../components/homeComponents/Deals';

const Home = () => {
	const [active, setInActive] = useState(true);

    	return (
		<div className={active ? `${styles.home_active}` : `${styles.home_inactive}`}>
			<MediaQuery maxDeviceWidth={768}>
				<MobileNav setInActive={setInActive} active={active}/>
			</MediaQuery>
			<section className={styles.home_content}>
				<Categories/>
				<Offers/>
				<Deals/>
			</section>
        	</div>
    	)
}

export default Home;
