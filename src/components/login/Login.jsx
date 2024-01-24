import React, { useContext, useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authprovider/Authprovider';

const Login = () => {
    const { loginUser, setUser, setFromLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const from = location.state?.from?.pathname || '/';
    console.log(from);


    const handleLogin = (event) => {
        event.preventDefault();
        setLoginError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.code);
                setLoginError(error.code);
            })
    }
    return (
        <div>
            <div className='authentication-page'>
                <h1 className='title'>Please login</h1>
                <form onSubmit={handleLogin}>
                    <div className='control-form'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className='control-form' style={{ position: 'relative' }}>
                        <label htmlFor="password">Password:</label>
                        <input type={showPassword ? 'text' : 'password'} name="password" id="password" required />
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer', position: 'absolute', top: '55%',right: '10px' }} />
                    </div>

                    {
                        loginError &&
                        <p style={{ color: 'red', margin: '0' }}>{loginError}</p>
                    }
                    <input type="submit" value='Login' />
                </form>
                <p>New to Ema-john? <Link to='/signup' onClick={() => setFromLogin(from)}>Create New Account</Link></p>

            </div>
        </div>
    );
};

export default Login;