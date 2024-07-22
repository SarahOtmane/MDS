import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance, { addToken} from '../../../service/axiosConfig';
import xss from 'xss';

import '../../../css/sign.css';

import Titre from '../../Titre';


const SignIn = () =>{
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState(false);

    const updateChamps = (e) => {
        setFormData({
            ...formData,
            [xss(e.target.name)]: xss(e.target.value).trim()
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axiosInstance.post('/persons/login', formData);
            
            const token = response.data.token;
            addToken(token);
            localStorage.setItem('role', 'user');

            navigate('/user/my-account/order');
        } catch (error) {
            const status = error.response ? error.response.status : 500;
            switch (status) {
                case 401:
                    setError(true);
                    break;
                case 404:
                    setError(true);
                    break;
                default:
                    console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
            }  
        }
    };

    return(
        <main>
            <Titre titre="Se connecter" lien="/user/login" classe="backGris" />

            <form className='formulaire column' onSubmit={submitForm}>
                {error && <p style={{ color: 'red' }}>Email ou mot de passe incorrect.</p>}
                <label className="text_bold">Email</label>
                <input 
                    type="email" 
                    name="email"
                    placeholder="email@gmail.com" 
                    defaultValue={formData.email}
                    onChange={updateChamps}
                    required
                />

                <label className="text_bold">Mot de passe</label>
                <input 
                    type="password" 
                    name='password'
                    defaultValue={formData.password}
                    onChange={updateChamps}
                    placeholder="Mot de passe" 
                    required
                />

                <a href='/user/password/forget'> Mot de passe oublié ?</a>

                <button type='submit'>Se connecter</button>
                <p>Vous n'avez pas de compte ? <a href='/user/register' className='text_bold'>S'inscrire</a></p>
            </form>
        </main>
    )
}

export default SignIn;