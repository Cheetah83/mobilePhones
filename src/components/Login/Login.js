import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
        <div>
            <div className="login-container">
                <div className="login-screen">
                <div className="screen__content">
                    <form className="login" method="POST" onSubmit={onSubmit}>
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input 
                        type="email" 
                        className="login__input" 
                        placeholder="User name / Email"
                        name={LoginFormKeys.Email}
                        value={values[LoginFormKeys.Email]}
                        onChange={changeHandler} 
                        />
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input 
                        type="password"
                        className="login__input" 
                        placeholder="Password"
                        name={LoginFormKeys.Password}
                        value={values[LoginFormKeys.Password]}
                        onChange={changeHandler} 
                        />
                    </div>
                    <button type='submit' className="button login__submit">
                        <span className="button__text">Log In Now</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>		
                    </form>
                    <div className="social-login">
                    <h3>log in via</h3>
                    <div className="social-icons">
                        <Link to="#" className="social-login__icon fab fa-instagram"></Link>
                        <Link to="#" className="social-login__icon fab fa-facebook"></Link>
                        <Link to="#" className="social-login__icon fab fa-twitter"></Link>
                    </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>		
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>		
                </div>
            </div>
        </div>
    );
}