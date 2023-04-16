import { useForm } from '../../hooks/useForm';

export const CreatePhone = ({
    onCreatePhoneSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        brand: '',
        title: '',
        price: '',
        imageUrl: '',
        description: '',
    }, onCreatePhoneSubmit);

    return (
        <div className="create-container">
            <div className="create-screen">
                <div className="screen__content">
                    <form className="create" method='post' onSubmit={onSubmit}>
                        <div className="create__field">
                            <input 
                            type="text" 
                            className="create__input" 
                            placeholder="Phone Brand" 
                            name='brand' 
                            value={values.brand} 
                            onChange={changeHandler}
                            />
                        </div>
                        <div className="create__field">
                            <input
                            type="text" 
                            className="create__input" 
                            placeholder="Phone Model Name" 
                            name='title'
                            value={values.title} 
                            onChange={changeHandler}
                            />
                        </div>
                        <div className="create__field">
                            <input 
                            type="number" 
                            className="create__input" 
                            placeholder="Price" 
                            name='price'
                            value={values.price} 
                            onChange={changeHandler}
                            />
                        </div>
                        <div className="create__field">
                            <input 
                            type="text" 
                            className="create__input" 
                            placeholder="https?://..." 
                            name='imageUrl' 
                            value={values.imageUrl} 
                            onChange={changeHandler}
                            />
                        </div>
                        <div className="create__field">
                            <input 
                            type="text" 
                            className="create__input" 
                            placeholder="Description" 
                            name='description' 
                            value={values.description} 
                            onChange={changeHandler}
                            />
                        </div>
                        <button type='submit' className="button create__submit">
                            <span className="button__text">Add Your Phone</span>
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
