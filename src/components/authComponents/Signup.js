import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../styles/authStyles/Signup.module.css';

const Signup = () => {

	return (
		<div className={styles.signup_container}>
			<h1 className={styles.welcome_header}>Welcome to T_U_O!</h1>
			<p className={styles.welcome_para}>Experience next generation shopping experience.</p>
			
			<form action="" method="POST" className={styles.signup_form}>				
				<label htmlFor="name" className={styles.form_label}>Mobile Number</label>
				<input type="text" name="name" className={styles.form_input} placeholder="Full name" />

				<label htmlFor="phone" className={styles.form_label}>Mobile Number</label>
				<input type="tel" name="phone" className={styles.form_input} placeholder="Mobile number" />

				<label htmlFor="email" className={styles.form_label}>Mobile Number</label>
				<input type="email" name="email" className={styles.form_input} placeholder="Email" />

				<label htmlFor="password" className={styles.form_label}>Mobile Number</label>
				<input type="password" name="password" className={styles.form_input} placeholder="Password" />

				<button type="submit" className={styles.submit_button}>Create Account</button>		
			</form>
			<p>Already have an accout?  <Link to="/login">Signin here</Link></p>
		</div>
	)
}

export default Signup;
