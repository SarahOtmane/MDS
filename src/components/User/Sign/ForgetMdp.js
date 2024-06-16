import { useState } from 'react';
import axios from 'axios';
import '../../../css/sign.css';
import Titre from "../../Titre.js";

const ForgetMdp = () =>{
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState({
        error : '',
        valide : ''
    });

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3004/users/forgot-password', { email : email });
            setMessage({
                error : '',
                valide: 'Un email de réinitialisation a été envoyé à votre adresse.'
            });
        } catch (error) {
            setMessage({
                error: 'Une erreur est survenue. Veuillez réessayer.',
                valide: ''
            });
        }
    };

    return(
        <main>
            <Titre titre="Mot de passe oublié" lien="/user/password/forget" classe="backGris" />

            <form className='formulaire column' onSubmit={submitForm}>
                <p>Veuillez saisir l'adresse e-mail associée à votre compte. Nous vous enverrons rapidement un lien pour réinitialiser votre mot de passe.</p>

                <label className="text_bold">Email</label>
                <input 
                    type="email" 
                    placeholder="email@gmail.com" 
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                {message.error && <p style={{ color: 'red' }}>{message.error}</p>}
                {message.valide && <p style={{ color: 'green' }}>{message.valide}</p>}
                
                <button type='submit'>Envoyer le lien</button>
            </form>
        </main>
    )
}

export default ForgetMdp;