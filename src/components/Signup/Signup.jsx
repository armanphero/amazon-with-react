import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authprovider/Authprovider';

const Signup = () => {
    const { createNewUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const handleSignUp = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('Password must be 6 characters');
            return;
        }
        createNewUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div>
            <div className='authentication-page'>
                <h1 className='title'>Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <div className='control-form'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div className='control-form'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className='control-form'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    {
                        error &&
                        <p style={{ color: 'red', margin: '0' }}>{error}</p>
                    }
                    <input type="submit" value='Sign Up' />
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;