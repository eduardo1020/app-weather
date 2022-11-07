import { useState, useRef } from 'react';

import '../assets/css/pages/login.css';

import logo from '../assets/img/logo.svg';
import user from '../assets/img/user.svg';

import { InputLogin } from '../components/InputLogin';

export const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const handleLogin = () => {


    }

    return (
        <div className='login'>

            <div className='logo'>
                <img src={logo} />
            </div>

            <div className='user'>
                <img src={user} />
            </div>


            <form>
                <InputLogin
                    label="email"
                    type="email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label="senha"
                    type="password"
                    value={senha}
                    onChange={newValue => setSenha(newValue)}
                    
                />
            </form>

        </div>
    )
}