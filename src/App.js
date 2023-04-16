import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { authServiceFactory } from './services/authService';
import { AuthContext } from './contexts/AuthContext';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register/Register";
import { Phones } from "./components/Phones/Phones";
import { PhoneDetails } from './components/PhoneDetails/PhoneDetails';
import { EditPhone } from './components/EditPhone/EditPhone';
import { phoneServiceFactory } from './services/phoneService';
import { CreatePhone } from './components/CreatePhone/CreatePhone';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import { ToastContainer } from 'react-toastify';
import { useGetAllProductsQuery } from './slice/productApi';

function App() {
    const navigate = useNavigate();
    const [phones, setPhones] = useState([]);
    const [auth, setAuth] = useState({});
    const phoneService = phoneServiceFactory(auth.accessToken);
    const authService = authServiceFactory(auth.accessToken)

    useEffect(() => {
        phoneService.getAll()
            .then(result => {
                setPhones(result)
            })
    }, []);

    const onCreatePhoneSubmit = async (data) => {
        const newPhone = await phoneService.create(data);

        setPhones(state => [...state, newPhone]);

        navigate('/phones');
    };

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/phones');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/phones');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

    const onPhoneEditSubmit = async (values) => {
        const result = await phoneService.edit(values._id, values);

        setPhones(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/phones/${values._id}`);
    }

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={contextValues}>
            <div id="box">
            <ToastContainer />
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create' element={<CreatePhone onCreatePhoneSubmit={onCreatePhoneSubmit} />} />
                        <Route path='/phones' element={<Phones phones={phones} />} />
                        <Route path='/phones/:phoneId' element={<PhoneDetails />} />
                        <Route path='/phones/:phoneId/edit' element={<EditPhone onPhoneEditSubmit={onPhoneEditSubmit} />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
