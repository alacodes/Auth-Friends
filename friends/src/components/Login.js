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
        axios
            .post('http://localhost:5000/api/login', credentials)
            .then(res => {
                console.log('token: ', res);
                localStorage.setItem('token: ', res.data.payload)
            })
            .catch(err => {
                console.log('Error: ', err.response.data.error)
            })

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