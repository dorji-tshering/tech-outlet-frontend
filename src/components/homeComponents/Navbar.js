import React from 'react';
import Logo from '../../assets/images/logo.jpeg'
import { NavLink } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import '../../styles/homeStyles/navbar.css';
import { MdMenu } from 'react-icons/md'; 


const Navbar = () => {
    return (
        <div className="navbar">                       
            <NavLink to="/" className="app-logo">
                <img src={Logo} alt="UTO-logo" className="logo" />
            </NavLink>
            <NavLink to="/signin" className="signin" >
                Signin
            </NavLink>
            <NavLink to="/cart" className="cart">
                <FaCartPlus/>
            </NavLink> 
            <MdMenu/>            
        </div>
    )
}

export default Navbar
