import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (
        <div>
            <div className="register-container">
                <div className="register-screen">
                <div className="screen__content">
                    <form className="register" method="POST" onSubmit={onSubmit}>
                    <div className="register__field">
                        <i className="register__icon fas fa-user"></i>
                        <input 
                        type="email" 
                        className="register__input"
                        name="email" 
                        placeholder="Email"
                        value={values.email}
                        onChange={changeHandler} 
                        />
                    </div>
                    <div className="register__field">
                        <i className="register__icon fas fa-lock"></i>
                        <input 
                        type="password" 
                        className="register__input" 
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={changeHandler} 
                        />
                    </div>
                    <div className="register__field">
                        <i className="register__icon fas fa-lock"></i>
                        <input 
                        type="password" 
                        className="register__input" 
                        name="confirmPassword"
                        placeholder="confirmPassword"
                        value={values.confirmPassword}
                        onChange={changeHandler} 
                        />
                    </div>
                    <button type='submit' className="button register__submit">
                        <span className="button__text">Register Now</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>				
                    </form>
                    <div className="social-register">
                    <h3>Sign in via</h3>
                    <div className="social-icons">
                        <Link to="#" className="social-register__icon fab fa-instagram"></Link>
                        <Link to="#" className="social-register__icon fab fa-facebook"></Link>
                        <Link to="#" className="social-register__icon fab fa-twitter"></Link>
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
};