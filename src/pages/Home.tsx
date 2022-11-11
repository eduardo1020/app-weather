import '../assets/css/pages/home.css';

import logo from '../assets/img/logoHome.svg';
import user from '../assets/img/userHome.svg';

export const Home = () => {
    return (
        <>
            <div className='menu'>
                <img id='logo' src={logo} />
                <img id='user' src={user} />
            </div>

            <div className='pesquisar' >
                <input type='text' placeholder='Insira uma cidade'/>
                <button className='buttonHome' type='submit'>Pesquisar</button>
            </div>
        </>

    )
}