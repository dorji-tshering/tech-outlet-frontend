import React, { useState } from 'react';
import Logo from '../../assets/images/logo.jpeg'
import { NavLink } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import '../../styles/utilStyles/mobilenav.css';
import { MdMenu } from 'react-icons/md'; 
import Search from '../homeComponents/Search';
import MobileMenu from '../menuComponents/MobileMenu';

const MobileNav = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [loggedIn, setLoginStatus] = useState(false);
	let cartItems = 9;

	return (
		<div className="mb-nav"> 
			<div className="navbar">  
				<section className="app-logo">                
				<NavLink to="/" className="logo-link">
					<img src={Logo} alt="UTO-logo" className="logo" />
				</NavLink>
				</section> 

				{ loggedIn? '' :
				<NavLink to="/login" className="signin" >
					Login
				</NavLink>
				}

				<NavLink to="/cart" className="cart">
					<div className="cart-and-items">
						<FaCartPlus className="cart-icon" />
						<span className="no-of-cartitems">{cartItems}</span>
					</div>
				</NavLink> 
				<MdMenu className="menu" onClick={() => setShowMenu(!showMenu)}/> 
			</div> 
			{showMenu ? <MobileMenu/> : ''}
			<Search/>           
		</div>
	)
}

export default MobileNav;
