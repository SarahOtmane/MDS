import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance, { removeToken }  from '../../axiosConfig';

import '../../css/account.css';

import AccountMenu from './AccountMenu';
import Titre from "../Titre";


const AccountPassword = () =>{
    const navigate = useNavigate();

    const [formData, setFormData]=useState({
        oldPassword:'',
        confirmPassword:'',
        newPassword:'',
    });

    const [newErrors, setNewErrors] = useState({});

    const updateChamps = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.trim()
        });
    };

    const validate = () => {
        const newErrors = {};
    
        // Password validation
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
        if (!passwordRegex.test(formData.newPassword)) {
          newErrors.newPassword = 'Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, une minuscule, un chiffre et un caractère spécial';
        }

        //Conformité des deux password
        if(formData.oldPassword !== formData.confirmPassword){
            newErrors.oldPassword = 'Les deux mot de passes ne sont pas conformes '
        }

        if(formData.oldPassword === formData.newPassword){
            newErrors.samePassword = 'Le nouveau mot de passe est le même que l\'ancien '
        }

        setNewErrors(newErrors);

        //retourne true ou false en fonction de si ya des erreurs ou pas
        return Object.keys(newErrors).length === 0;
    };

    const submitForm = async (e) => {
        e.preventDefault();
    
        if (!validate()) {
          return;
        }

        const data = {
            password: formData.newPassword,
            oldPassword: formData.oldPassword
        }
    
        try {
            await axiosInstance.put('users/updatePassword', data);
            removeToken();
            navigate('/user/login');
        } catch (error) {
            if(error.response.status === 401) navigate('../Error401.js')
                else if(error.response.status === 404) navigate('../Error404.js')
                else if(error.response.status === 403) navigate('../Error403.js')
                else if(error.response.status === 500) navigate('../Error500.js')
                else console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error)   
        }
    };


    return(
        <main>
            <Titre titre="Mon compte" lien="/user/my-account/update-password" classe="backGris" />
            
            <div className='row account'>
                <AccountMenu selected="motdepasse" />
                <section className='updateMdp'>
                    <form className='updateMdp column' onSubmit={submitForm}>
                        <h2>Changer le mot de passe</h2>

                        <label className="text_bold">Ancien mot de passe</label>
                        <input 
                            type="password" 
                            name='oldPassword'
                            placeholder="Mot de passe" 
                            defaultValue={formData.oldPassword}
                            onChange={updateChamps}
                            required
                        />
                        {newErrors.passwordIncorrect && <p style={{ color: 'red' }}>{newErrors.passwordIncorrect}</p>}

                        <label className="text_bold">Nouveau mot de passe</label>
                        <input 
                            type="password" 
                            name='confirmPassword'
                            placeholder="Mot de passe" 
                            defaultValue={formData.confirmPassword}
                            onChange={updateChamps}
                            required
                        />
                        {newErrors.oldPassword && <p style={{ color: 'red' }}>{newErrors.oldPassword}</p>}

                        <label className="text_bold">Confirmer le mot de passe</label>
                        <input 
                            type="password" 
                            name='newPassword'
                            placeholder="Mot de passe" 
                            defaultValue={formData.newPassword}
                            onChange={updateChamps}
                            required
                        />
                        {newErrors.newPassword && <p style={{ color: 'red' }}>{newErrors.newPassword}</p>}
                        {newErrors.samePassword && <p style={{ color: 'red' }}>{newErrors.samePassword}</p>}

                        <button type='submit'>Réinitialiser le mot de passe</button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default AccountPassword;