import React, { useState, useEffect } from 'react';
import axiosInstance from '../../service/axiosConfig';

import '../../../css/account.css';

import AccountMenu from './AccountMenu';
import Titre from "../../Titre";
import { useNavigate } from 'react-router-dom';


const AccountAdress = () =>{
    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axiosInstance.get('/users');
                setUser(response.data);
            } catch (error) {
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
                    case 500:
                        navigate('/error500');
                        break;
                    default:
                        console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
                }  
            }
        };

        getUser();
    }, [navigate]);

    const updateChamps = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value.trim()
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            await axiosInstance.put('users', user);
            setUpdate(true);
        } catch (error) {
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
            <Titre titre="Mon compte utilisateur" lien="/user/my-account/adress" classe="backGris" />
            
            <div className='row account'>
                <AccountMenu selected="adress" />
                <section className='adress'>
                    {update &&  <p className='messageGreen'>
                        <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 6L9.3125 18L4 12.5455" stroke="#057234" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Informations mises à jous avec succès
                    </p>}
                    <form className='adress column' onSubmit={submitForm}>
                        <h2>Adresse de livraison</h2>

                        <label className="text_bold">Numéro de la rue</label>
                        <input 
                            type="text" 
                            name="streetAdress"
                            placeholder="4 Rue Solférino" 
                            defaultValue={user.streetAdress}
                            onChange={updateChamps}
                            required
                        />

                        <label className="text_bold">Ville</label>
                        <input 
                            type="text" 
                            name='city'
                            placeholder="Boulogne-Billancourt" 
                            defaultValue={user.city}
                            onChange={updateChamps}
                            required
                        />

                        <div className='row double justifycontent_spbetween'>
                            <div className='column'><label className="text_bold">Code Postal</label>
                            <input 
                                type="text" 
                                name='postalCode'
                                placeholder="92100" 
                                defaultValue={user.postalCode}
                                onChange={updateChamps}
                                required
                            /></div>

                            <div className='column'><label className="text_bold">Pays</label>
                            <input 
                                type="text" 
                                name='country'
                                placeholder="France" 
                                defaultValue={user.country}
                                onChange={updateChamps}
                                required
                            />
                            </div>
                        </div>

                        <button type='submit'>Sauvegarder les modifications</button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default AccountAdress;