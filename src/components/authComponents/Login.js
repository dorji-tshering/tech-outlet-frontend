import { Link, NavLink } from 'react-router-dom';
import styles from '../../styles/authStyles/Login.module.css';

const Login = () => {
     
        return (
		<div className={styles.login_container}>
			<h1 className={styles.welcome_header}>Welcome to E-Commerce!</h1>
			<p className={styles.welcome_para}>Experience next generation shopping experience.</p>
			<form action="" method="post" className={styles.login_form}>
			
				<label htmlFor="phone" className={styles.form_label}>Mobile Number</label>
				<input type="tel" name="phone" className={styles.form_input} placeholder="Mobile number" />
			
				<label htmlFor="password" className={styles.form_label}>Password</label>
				<input type="password" name="password" className={styles.form_input} placeholder="Password"/>

				<NavLink to="" className={styles.forgot_password}>Forgot Password?</NavLink>				
				<button type="submit" className={styles.submit_button}>LOGIN</button>

			</form>
			<p>New to U_T_O?  <Link to="/signup">Signup here</Link></p>
		</div>
        )
}

export default Login;
