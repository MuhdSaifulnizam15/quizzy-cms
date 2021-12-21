import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

import { useHistory, Link } from 'react-router-dom';

import { Routes } from "routes";
import BgImage from "assets/images/illustrations/signin.svg";

async function loginUser(credentials) {
    return fetch('http://localhost:3001/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const { t } = useTranslation();
    const history = useHistory();
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });

        if(token.tokens){
            setToken(token.tokens);
            history.push(Routes.Dashboard.path);
        }
    }

    return (
        <div>Login</div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}