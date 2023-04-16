import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="py-3 my-4">
                <ul className="nav-footer justify-content-center border-bottom pb-3 mb-3">
                    <li className="footer-item"><Link to="/" className="nav-link px-2">Home</Link></li>
                    <li className="footer-item"><Link to="/about" className="nav-link px-2">About</Link></li>
                    <li className="footer-item"><Link to="/contact" className="nav-link px-2">Contact</Link></li>
                    <li className="footer-item"><Link to="/products" className="nav-link px-2">Products</Link></li>
                </ul>
                <p className="text-center">© 2023 YACHI'S APPLE STORE</p>
            </footer>
        </div>
    );
};

export default Footer