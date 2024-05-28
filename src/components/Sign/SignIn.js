import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../css/sign.css';

import Titre from '../Titre';


const SignIn = () =>{
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
            const response = await axios.post('http://localhost:3003/users/login', formData);
            
            const token = response.data.token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            navigate('/user/my-account/order');
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 404) {
                setError(true);
            }else{
                console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error)
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
                    value={formData.email}
                    onChange={updateChamps}
                    required
                />

                <label className="text_bold">Mot de passe</label>
                <input 
                    type="password" 
                    name='password'
                    value={formData.password}
                    onChange={updateChamps}
                    placeholder="Mot de passe" 
                    required
                />

                <a href='/resetMdp'> Mot de passe oublié ?</a>

                <button type='submit'>Se connecter</button>
                <p>Vous n'avez pas de compte ? <a href='/user/register' className='text_bold'>S'inscrire</a></p>
            </form>
        </main>
    )
}

export default SignIn;