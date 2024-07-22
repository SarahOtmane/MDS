import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../service/axiosConfig';
import xss from 'xss';

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
                const response = await axiosInstance.get('/persons/user');
                setUser(response.data);
            } catch (error) {
                console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
            }
        };

        getUser();
    }, [navigate]);

    const updateChamps = (e) => {
        setUser({
            ...user,
            [xss(e.target.name)]: xss(e.target.value).trim()
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            await axiosInstance.put('persons/user', user);
            setUpdate(true);
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error); 
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
                            name="streetAddress"
                            placeholder="4 Rue Solférino" 
                            defaultValue={user.streetAddress}
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