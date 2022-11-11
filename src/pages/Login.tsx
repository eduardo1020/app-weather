import { useState, useRef, useCallback } from 'react';

import '../assets/css/pages/login.css';

import logo from '../assets/img/logoLogin.svg';
import user from '../assets/img/userLogin.svg';

import { InputLogin } from '../components/InputLogin';

export const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const handleLogin = useCallback(() => {
        console.log(email)
        console.log(senha)
    }, [email, senha])

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
                    type="email"
                    value={email}
                    placeholder='Email'
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    type="password"
                    value={senha}
                    placeholder='Senha'
                    ref={inputPasswordRef}
                    onChange={newValue => setSenha(newValue)}
                />

                <div className='links'>

                    <button type='submit' onClick={handleLogin}>Entrar</button>

                    <a className='link' href=''>Cadastre-se</a>
                    <a className='link' href=''>Esqueci minha senha</a>

                </div>

            </form>

        </div>
    )
}