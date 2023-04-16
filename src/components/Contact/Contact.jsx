import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
        <div className="contact-containers mb-5">
            <div className=" contact-text col-md-6">
                <div className="row">
                    <div className="contact-text col-12 text-center py-4 my-4">
                        <h1>Have Some Questions?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="contact-image col-md 5 d-flex justify-content-center">
                        <img src="/images/contact.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                </div>
            </div>
            <div className="contact-form col-md-6">
                <div className="contact-container">
                    <div className="contact-screen">
                    <div className="screen__content">
                        <form className="contact">
                        <div className="contact__field">
                            <input type="text" className="contact__input" placeholder="Full Names" />
                        </div>
                        <div className="contact__field">
                            <input type="text" className="contact__input" placeholder="Email" />
                        </div>
                        <div className="contact__field">
                            <input type="text" className="contact__input" placeholder="What do you want us to help you" />
                        </div>
                        <button className="button contact__submit">
                            <span className="button__text">Contact Us</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>				
                        </form>
                        <div className="social-contact">
                        <h3>Connect with us via</h3>
                        <div className="social-icons">
                            <Link to="#" className="social-contact__icon fab fa-instagram"></Link>
                            <Link to="#" className="social-contact__icon fab fa-facebook"></Link>
                            <Link to="#" className="social-contact__icon fab fa-twitter"></Link>
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
        </div>
    </div>
  )
}

export default Contact