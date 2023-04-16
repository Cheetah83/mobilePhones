import { Link } from 'react-router-dom';

export const Phones = ({
    phones,
}) => {
    return (
        <div className="col">
          <h1 className='header'>Latest Smart Phones Available</h1>
            <div className='product'>
            {phones.map((phone) => {
                return (
                    <div className="phone-container col-md-3" key={phone._id}>
                        <div className="phone-screen">
                            <div className="card h-100">
                                <img src={phone.imageUrl} className="card-img-top" alt={phone.title} />
                                <div className="card-body">
                                <h2 className='card-brand'>{phone.brand}</h2>
                                <h5 className="card-title">{phone.title}</h5>
                                <h5 className='card-price'>${phone.price}</h5>
                                </div>
                                <Link to={`/phones/${phone._id}`}><button>Details</button></Link>
                            </div>
                        </div>
                    </div>
                )
            })}
            {phones.length === 0 && (
                <p>Your don't have any products left in the store</p>
            )}
            </div>
        </div>
    );
};