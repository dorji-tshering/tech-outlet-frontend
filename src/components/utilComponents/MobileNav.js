import React, { useState } from 'react';
import Logo from '../../assets/images/logo.jpeg'
import { NavLink } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import styles from '../../styles/utilStyles/Mobilenav.module.css';
import { MdMenu } from 'react-icons/md'; 
import MobileMenu from '../menuComponents/MobileMenu';

const MobileNav = ({ setInActive }) => {
	const [showMenu, setShowMenu] = useState(false);
	let cartItems = 7;

	return (
		<div className={styles.mb_nav}> 
			<div className={styles.navbar} >  
				<section className={styles.logo_container}>                
					<NavLink to="/">
						<img src={Logo} alt="UTO-logo" className={styles.logo} />
					</NavLink>
				</section> 

				<NavLink to="/login" className={styles.signin}>
					LOGIN
				</NavLink>

				<NavLink to="/cart" className={styles.cart}>
					<div className={styles.cart_and_items}>
						<FaCartPlus className={styles.cart_icon} />
						<span className={styles.no_of_cartitems}>{cartItems}</span>
					</div>
				</NavLink>
				<MdMenu className={styles.main_menu} 
				onClick={() => {
					setShowMenu(!showMenu);
					setInActive(false);
				}}/> 
			</div> 
			{showMenu ? <MobileMenu setShowMenu={setShowMenu} setInActive={setInActive} /> : ''}
		</div>
	)
}

export default MobileNav;
