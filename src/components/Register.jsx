/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Register = ({ onRegister }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const validateForm = () => {
        const isValidName = name.length >= 3 && name.length <= 30;
        const isValidEmail = email.includes('@');
        const isValidPassword = password.length >= 10 && /[!@#$%^&*]/.test(password);
        const passwordsMatch = password === repeatPassword;
        return isValidName && isValidEmail && isValidPassword && passwordsMatch;
    };
    const handleSubmit = () => {
        if (validateForm()) {
            const userData = { name, email, password };
            localStorage.setItem('user',JSON.stringify(userData));
            onRegister(userData);
        } else {
            alert('Please ensure all fields are filled out correctly.');
        }
    };

    return (
        <div className="register-form">
            <h2>CREATE ACCOUNT</h2>
            <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <input type="password" placeholder="Repeat Password" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />
            <button onClick={handleSubmit} disabled={!validateForm()} className="signup-button">SIGN UP</button>
        </div>
    );
};

export default Register;
