import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { phoneServiceFactory } from "../../services/phoneService";

export const EditPhone = ({
    onPhoneEditSubmit,
}) => {
    const { phoneId } = useParams();
    const phoneService = useService(phoneServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        brand: '',
        title: '',
        price: '',
        imageUrl: '',
        description: '',
    }, onPhoneEditSubmit);

    useEffect(() => {
        phoneService.getOne(phoneId)
            .then(result => {
                changeValues(result);
            });
    }, [phoneId]);

    return (
        <div className="edit-container">
            <div className="edit-screen">
            <div className="screen__content">
                <form onSubmit={onSubmit} method='post' className="edit">
                <div className="edit__field">
                    <input 
                    type="text" 
                    className="edit__input" 
                    placeholder="Phone Brand"
                    name="brand"
                    value={values.brand}
                    onChange={changeHandler}
                    />
                    
                </div>
                <div className="edit__field">
                    <input 
                    type="text" 
                    className="edit__input" 
                    placeholder="Phone Model Name"
                    name="title"
                    value={values.title}
                    onChange={changeHandler}
                    />
                </div>
                <div className="edit__field">
                    <input 
                    type="number" 
                    className="edit__input" 
                    placeholder="Price"
                    name="price"
                    value={values.price}
                    onChange={changeHandler}
                    />
                </div>
                <div className="edit__field">
                    <input 
                    type="imageUrl" 
                    className="edit__input" 
                    placeholder="https?://..."
                    name="imageUrl"
                    value={values.imageUrl}
                    onChange={changeHandler}
                    />
                </div>
                <div className="edit__field">
                    <input 
                    type="text" 
                    className="edit__input" 
                    placeholder="Description" 
                    name="description"
                    value={values.description}
                    onChange={changeHandler}
                    />
                </div>
                <button type='submit' className="button edit__submit">
                    <span className="button__text">Update Your Phone</span>
                    <i className="button__icon fas fa-chevron-right"></i>
                </button>				
                </form>
            </div>
            <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>		
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
            </div>		
            </div>
        </div>
    );
};