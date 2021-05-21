import React from 'react';
import MobileNav from '../components/utilComponents/MobileNav';
import Offers from '../components/homeComponents/Offers';
//import axios from 'axios';
import Categories from '../components/homeComponents/Categories';
import MediaQuery from 'react-responsive';
import Deals from '../components/homeComponents/Deals';

const Home = () => {
    // const [message, setMessage] = useState();
    // axios.get('http://localhost:4000').then((res) => {setMessage(res.data);
    //         console.log(res);    }).catch();

    	return (
		<div className="home">
			<MediaQuery maxDeviceWidth={768}>
				<MobileNav/>
			</MediaQuery>

			<Categories/>
			<Offers/>
			<Deals/>
        	</div>
    	)
}

export default Home;
