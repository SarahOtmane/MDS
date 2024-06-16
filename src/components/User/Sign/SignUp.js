import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../../css/sign.css';

import Titre from '../../Titre';

const SignUp = () =>{
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        lastname: '',
        firstname: '',
        email: '',
        password: '',
        mobile: '',
        streetAdress: '',
        city: '',
        country: '',
        postalCode: ''
    });

    const [errors, setErrors] = useState({});
    const [emailExist, setEmailExist] = useState(false);

    const updateChamps = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.trim()
        });
    };

    const validate = () => {
        const newErrors = {};
    
        // Nom validation
        if (!formData.lastname) {
          newErrors.lastname = 'Nom est requis';
        }
    
        // Prénom validation
        if (!formData.firstname) {
          newErrors.firstname = 'Prénom est requis';
        }
    
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          newErrors.email = 'Email n\'est pas valide';
        }
    
        // Password validation
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
        if (!passwordRegex.test(formData.password)) {
          newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, une minuscule, un chiffre et un caractère spécial';
        }
    
        // Téléphone validation
        const phoneRegex = /^[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}$/;
        if (!phoneRegex.test(formData.mobile)) {
          newErrors.mobile = 'Le téléphone n\'est pas valide';
        }
    
        setErrors(newErrors);

        //retourne true ou false en fonction de si ya des erreurs ou pas
        return Object.keys(newErrors).length === 0;
    };
    
    const submitForm = async (e) => {
        e.preventDefault();
    
        if (!validate()) {
          return;
        }
    
        try {
            await axios.post('http://localhost:3004/users/register', formData);
            navigate('/user/login');
        }catch (error) {
            const status = error.response ? error.response.status : 500;
            switch (status) {
                case 401:
                    navigate('/error401');
                    break;
                case 403:
                    navigate('/error403');
                    break;
                case 404:
                    navigate('/error404');
                    break;
                case 409:
                    setEmailExist(true);
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
        <main>
            <Titre titre="S'inscrire" lien="/user/register" classe="backGris" />

            <form className='formulaire column' onSubmit={submitForm}>
                <label className="text_bold">Nom</label>
                <input 
                    type="text" 
                    name='lastname'
                    placeholder="Cruz" 
                    defaultValue={formData.lastname}
                    onChange={updateChamps}
                    required
                />
                {errors.lastname && <p style={{ color: 'red' }}>{errors.lastname}</p>}

                <label className="text_bold">Prénom</label>
                <input 
                    type="text" 
                    name='firstname'
                    placeholder="Tom" 
                    defaultValue={formData.firstname}
                    onChange={updateChamps}
                    required
                />
                {errors.firstname && <p style={{ color: 'red' }}>{errors.firstname}</p>}

                <label className="text_bold">Email</label>
                <input 
                    type="email" 
                    name="email"
                    placeholder="email@gmail.com" 
                    defaultValue={formData.email}
                    onChange={updateChamps}
                    required
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                {emailExist && <p style={{ color: 'red' }}>Cet email est associé à un compte existant.</p>}

                <label className="text_bold">Mot de passe</label>
                <input 
                    type="password" 
                    name='password'
                    placeholder="Mot de passe" 
                    defaultValue={formData.password}
                    onChange={updateChamps}
                    required
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

                <label className="text_bold">Téléphone</label>
                <input 
                    type="tel" 
                    pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" 
                    name='mobile'
                    placeholder="06 36 46 79 12" 
                    defaultValue={formData.mobile}
                    onChange={updateChamps}
                    required
                />
                {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}

                <p>En créant un compte, vous acceptez nos conditions d'utilisations et notre politique de confidentialité</p>

                <button type='submit'>Créer un compte</button>
                <p>Vous avez déja un compte ? <a href='/user/login' className='text_bold'>Se connecter</a></p>
            </form>
        </main>
    )
}

export default SignUp;