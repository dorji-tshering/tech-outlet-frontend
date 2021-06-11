import { NavLink } from 'react-router-dom';
import styles from '../../styles/menuStyles/Mobilemenu.module.css';

const MobileMenu = ({ setShowMenu }) => {
        return (
                <div className={styles.mobile_menu}>
                        <NavLink to="/signup" onClick={() => setShowMenu(false)} 
                        className={styles.menu_link}>
                                SIGNUP?
                        </NavLink>
                        <NavLink to="/" onClick={() => setShowMenu(false)} 
                        className={styles.menu_link}>
                                Account
                        </NavLink>
                        <NavLink to="/" onClick={() => setShowMenu(false)} 
                        className={styles.menu_link}>
                                Orders
                        </NavLink>
                        <NavLink to="/" onClick={() => setShowMenu(false)} 
                        className={styles.menu_link}>
                                All Categories
                        </NavLink>
                        <NavLink to="/" onClick={() => setShowMenu(false)} 
                        className={styles.menu_link}>
                                Customer Service
                        </NavLink>
                        <NavLink to="/" onClick={() => setShowMenu(false)} 
                        className={styles.menu_link}>
                                About Us
                        </NavLink>
                        <NavLink to="/" onClick={() => setShowMenu(false)} 
                        className={styles.menu_link}>
                                About Team
                        </NavLink>
                        <NavLink to="/" onClick={() => setShowMenu(false)} 
                        className={styles.menu_link}>
                                Terms and Services
                        </NavLink>
                </div>
        )
}

export default MobileMenu;
