import React, {useState} from 'react'
import axios from 'axios'

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault();
        console.log('Use these credentials for axios call: ', credentials)
    }

    return (
        <form onSubmit={login}>
            <input
                type='text'
                name='username'
                value={credentials.username}
                onChange={handleChange}
            />
            <input
                type='password'
                name='password'
                value={credentials.password}
                onChange={handleChange}
            />
            <button>Login</button>
        </form>
    )
}

export default Login;