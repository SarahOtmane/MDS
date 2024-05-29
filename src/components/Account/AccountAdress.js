import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';

import '../../css/account.css';

import AccountMenu from './AccountMenu';
import Titre from "../Titre";


const AccountAdress = () =>{

    const [user, setUser] = useState({});
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('/users');
                setUser(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des commandes:', error);
            }
        };

        getUser();
    }, []);

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
            await axios.post('http://localhost:3003/users', user);
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error)
        }
    };

    const userData = user;

    return(
        <main>
            <Titre titre="Mon compte" lien="/user/my-account/adress" classe="backGris" />
            
            <div className='row account'>
                <AccountMenu selected="adress" />
                <section className='adress'>
                    {update &&  <p style={{ color: '#BDDFB4' }}>Informations mises à jous avec succès</p>}
                    <form className='adress column'>
                        <h2>Adresse de livraison</h2>

                        <label className="text_bold">Numéro de la rue</label>
                        <input 
                            type="text" 
                            name="streetAdress"
                            placeholder="4 Rue Solférino" 
                            defaultValue={userData.streetAdress}
                            onChange={updateChamps}
                            required
                        />

                        <label className="text_bold">Ville</label>
                        <input 
                            type="text" 
                            name='city'
                            placeholder="Boulogne-Billancourt" 
                            defaultValue={userData.city}
                            onChange={updateChamps}
                            required
                        />

                        <div className='row double justifycontent_spbetween'>
                            <div className='column'><label className="text_bold">Code Postal</label>
                            <input 
                                type="text" 
                                name='postalCode'
                                placeholder="92100" 
                                defaultValue={userData.postalCode}
                                onChange={updateChamps}
                                required
                            /></div>

                            <div className='column'><label className="text_bold">Pays</label>
                            <input 
                                type="text" 
                                name='country'
                                placeholder="France" 
                                defaultValue={userData.country}
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