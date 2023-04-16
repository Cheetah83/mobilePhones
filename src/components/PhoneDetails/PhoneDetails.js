import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';
import { phoneServiceFactory } from '../../services/phoneService';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slice/cartService';

export const PhoneDetails = () => {
    const { userId } = useContext(AuthContext);
    const { phoneId } = useParams();
    const [phone, setPhone] = useState({});
    const phoneService = useService(phoneServiceFactory)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        phoneService.getOne(phoneId)
            .then(result => {
                setPhone(result);
            })
    }, [phoneId]);

    const isOwner = phone._id === userId;

    const onDeleteClick = async () => {
        await phoneService.delete(phone._id);

        navigate('/phones');
    };

    const handleAddToCart = (phone) => {
        dispatch(addToCart(phone));
        navigate("/cart");
    }

    return (
        <div className='phone-detail'>
            <h1>Phone Details</h1>
            <hr />
            <div className='detail'>
                <div className="detail-container">
                    <div className="detail-screen">
                        <div className="cards h-100">
                            <div className="image col-md-6">
                            <img src={phone.imageUrl} alt={phone.title} />
                            </div>
                            <div className="card-detail col-md-6">
                            <h2 className='card-brand'>{phone.brand}</h2>
                            <h5 className="card-title">{phone.title}</h5>
                            <h5 className='card-price'>${phone.price}</h5>
                            <p className="card-text">{phone.description}</p>
                            <button onClick={() => handleAddToCart(phone)}>Add to Cart</button>
                            </div>
                        </div>
                        {isOwner && (
                            <div className="btn">
                                <Link to={`/phones/${phone._id}/edit`}><button>Edit</button></Link>
                                <button onClick={onDeleteClick}>Delete</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};