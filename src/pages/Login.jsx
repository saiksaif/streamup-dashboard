import React from 'react';
import LoginForm from '../components/LoginForm';

function Login() {
    return (
        <div className='flex flex-col justify-center w-screen'>
            <h1 className='w-100 text-center text-2xl font-bold my-4'>Login Page</h1>
            <LoginForm className="" />
        </div>
    );
}

export default Login;
