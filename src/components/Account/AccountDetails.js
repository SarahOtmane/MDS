import React, { useEffect, useState} from 'react';
import axiosInstance from '../../axiosConfig';

import '../../css/account.css';

import AccountMenu from './AccountMenu';
import Titre from "../Titre";
import { useNavigate } from 'react-router-dom';


const AccountDetails = () =>{
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [update, setUpdate] = useState(false);

    const [formData, setFormData]=useState({
        lastname: '',
        firstname: '',
        mobile: '',
    });

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axiosInstance.get('/users');
                setUser(response.data);
                setFormData({
                    lastname: response.data.lastname,
                    firstname: response.data.firstname,
                    mobile: response.data.mobile,
                });
            } catch (error) {
                console.error('Erreur lors de la récupération des informations de l utilisateur:', error);
            }
        };

        getUser();
    }, []);

    const updateChamps = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.trim()
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        const data = {
            ...user,
            lastname: formData.lastname,
            firstname: formData.firstname,
            mobile: formData.mobile,
        }
    
        try {
            await axiosInstance.put('users', data);
            setUpdate(true);
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
            <Titre titre="Mon compte" lien="/user/my-account/details" classe="backGris" />
            
            <div className='row account'>
                <AccountMenu selected="details" />
                <section className='details'>
                    {update &&  <p className='messageGreen'>
                        <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 6L9.3125 18L4 12.5455" stroke="#057234" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Informations mises à jous avec succès
                    </p>}
                    <form className='details column' onSubmit={submitForm}>
                        <h2>Détails du compte</h2>

                        <label className="text_bold">Nom</label>
                        <input 
                            type="text" 
                            name='lastname'
                            placeholder="Cruz" 
                            defaultValue={formData.lastname}
                            onChange={updateChamps}
                            required
                        />

                        <label className="text_bold">Prénom</label>
                        <input 
                            type="text" 
                            name='firstname'
                            placeholder="Tom" 
                            defaultValue={formData.firstname}
                            onChange={updateChamps}
                            required
                        />

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

                        <button type='submit'>Sauvegarder les modifications</button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default AccountDetails;