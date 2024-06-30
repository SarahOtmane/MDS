import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addToken } from '../../service/axiosConfig';

import '../../../css/artisanSign.css';

import Titre from '../../Titre';


const ArtisanSignIn = () =>{
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState(false);

    const updateChamps = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.trim()
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:3004/artisans/login', formData);
            
            const token = response.data.token;
            addToken(token);
            localStorage.setItem('role', 'artisan');

            navigate('/artisan/my-account/details');
        } catch (error) {
            const status = error.response ? error.response.status : 500;
            switch (status) {
                case 401:
                    setError(true);
                    break;
                case 403:
                    navigate('/error403');
                    break;
                case 404:
                    setError(true);
                    break;
                case 500:
                    navigate('/error500');
                    break;
                default:
                    console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
            }  
        }
    };

    return(
        <main className='artisan_signin'>
            <Titre titre="Se connecter" lien="/artisan/login" classe="backGris" />

            <form className='column' onSubmit={submitForm}>
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

                <a href='/resetMdp'> Mot de passe oublié ?</a>

                <button type='submit'>Se connecter</button>
                <p>Vous n'avez pas de compte ? <a href='/artisan/register' className='text_bold'>S'inscrire</a></p>
            </form>
        </main>
    )
}

export default ArtisanSignIn;