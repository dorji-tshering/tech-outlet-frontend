import { NavLink } from 'react-router-dom';
import { MdCopyright } from 'react-icons/md';
import '../../styles/authStyles/login.css';

const Login = () => {
    
        return (
		<div className="login-container">
			<h1 className="welcome-header">Welcome to E-Commerce!</h1>
			<p className="welcome-para">Experience next generation shopping experience.</p>
			<form action="" method="post" className="login-form">
			
				<label htmlFor="phone" className="form-label">Mobile Number</label>
				<input type="tel" name="phone" className="form-input" placeholder="Mobile number" />
			
				<label htmlFor="password" className="form-label">Password</label>
				<input type="password" name="password" className="form-input" placeholder="Password"/>

				<NavLink to="" className="forgot-password">Forgot Password?</NavLink>				
				<button type="submit" className="submit-button">LOGIN</button>

			</form>
			<section className="link-to-signup">
				<h3 className="new-to-ecom">New To E-Commerce?</h3>
				<NavLink to="/signup" className="signup-link">SIGNUP HERE!</NavLink>
			</section>
		
			<p className="copyright"><MdCopyright className="c-icon" /> 2021, @TIKU</p>
		</div>
        )
}

export default Login;
