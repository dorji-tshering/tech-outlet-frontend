import React, { useState } from 'react';
import Logo from '../../assets/images/logo.jpeg'
import { NavLink } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import styles from '../../styles/utilStyles/Mobilenav.module.css';
import { MdMenu } from 'react-icons/md'; 
import Search from '../homeComponents/Search';
import MobileMenu from '../menuComponents/MobileMenu';

const MobileNav = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [loggedIn, setLoginStatus] = useState(false);
	let cartItems = 9;

	return (
		<div className={styles.mb_nav}> 
			<div className={styles.navbar}>  
				<section className={styles.app_logo}>                
					<NavLink to="/">
						<img src={Logo} alt="UTO-logo" className={styles.logo} />
					</NavLink>
				</section> 

				{ loggedIn? '' :
				<NavLink to="/login" className={styles.signin} >
					Login
				</NavLink>
				}

				<NavLink to="/cart" className={styles.cart}>
					<div className={styles.cart_and_items}>
						<FaCartPlus className={styles.cart_icon} />
						<span className={styles.no_of_cartitems}>{cartItems}</span>
					</div>
				</NavLink> 
				<MdMenu className={styles.menu} onClick={() => setShowMenu(!showMenu)}/> 
			</div> 
			{showMenu ? <MobileMenu/> : ''}
			<Search/>           
		</div>
	)
}

export default MobileNav;
