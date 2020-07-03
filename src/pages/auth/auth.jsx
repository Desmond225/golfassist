import React from 'react';
import './auth.scss';
import SignIn from '../../components/sign-in/signIn';
import SignUp from '../../components/sign-up/signUp';

const Auth = () => (
    <div className="auth">
        <SignIn />
        <SignUp />
    </div>
)

export default Auth;