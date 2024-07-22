import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../service/axiosConfig';
import xss from 'xss';

import '../../../css/account.css';

import ArtisanAccountMenu from './ArtisanAccountMenu';
import Titre from "../../Titre";



const ArtisanAccountAdress = () =>{
    const navigate = useNavigate();

    const [artisan, setArtisan] = useState({});
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const getArtisan = async () => {
            try {
                const response = await axiosInstance.get('/persons/artisan');
                setArtisan(response.data);
            } catch (error) {
                console.error('Erreur:', error);
            }
        };

        getArtisan();
    }, [navigate]);

    const updateChamps = (e) => {
        setArtisan({
            ...artisan,
            [xss(e.target.name)]: xss(e.target.value).trim()
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            await axiosInstance.put('/persons/artisan', artisan);
            setUpdate(true);
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
        }
    };
    if(artisan && artisan.address && artisan.address.streetAddress){
    return(
        <main>
            <Titre titre="Mon compte artisan" lien="/artisan/my-account/adress" classe="backGris" />
            
            <div className='row account'>
                <ArtisanAccountMenu selected="adress" />
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
                            defaultValue={artisan.address.streetAddress}
                            onChange={updateChamps}
                            required
                        />

                        <label className="text_bold">Ville</label>
                        <input 
                            type="text" 
                            name='city'
                            placeholder="Boulogne-Billancourt" 
                            defaultValue={artisan.address.city}
                            onChange={updateChamps}
                            required
                        />

                        <div className='row double justifycontent_spbetween'>
                            <div className='column'><label className="text_bold">Code Postal</label>
                            <input 
                                type="text" 
                                name='postalCode'
                                placeholder="92100" 
                                defaultValue={artisan.address.postalCode}
                                onChange={updateChamps}
                                required
                            /></div>

                            <div className='column'><label className="text_bold">Pays</label>
                            <input 
                                type="text" 
                                name='country'
                                placeholder="France" 
                                defaultValue={artisan.address.country}
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
    )}

}


export default ArtisanAccountAdress;