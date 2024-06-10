import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axiosConfig';

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
                const response = await axiosInstance.get('/artisans');
                setArtisan(response.data);
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

        getArtisan();
    }, [navigate]);

    const updateChamps = (e) => {
        const { name, value } = e.target;
        setArtisan({
            ...artisan,
            [name]: value.trim()
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            await axiosInstance.put('artisans', artisan);
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
            <Titre titre="Mon compte" lien="/artisan/my-account/adress" classe="backGris" />
            
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
                            name="streetAdress"
                            placeholder="4 Rue Solférino" 
                            defaultValue={artisan.streetAdress}
                            onChange={updateChamps}
                            required
                        />

                        <label className="text_bold">Ville</label>
                        <input 
                            type="text" 
                            name='city'
                            placeholder="Boulogne-Billancourt" 
                            defaultValue={artisan.city}
                            onChange={updateChamps}
                            required
                        />

                        <div className='row double justifycontent_spbetween'>
                            <div className='column'><label className="text_bold">Code Postal</label>
                            <input 
                                type="text" 
                                name='postalCode'
                                placeholder="92100" 
                                defaultValue={artisan.postalCode}
                                onChange={updateChamps}
                                required
                            /></div>

                            <div className='column'><label className="text_bold">Pays</label>
                            <input 
                                type="text" 
                                name='country'
                                placeholder="France" 
                                defaultValue={artisan.country}
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


export default ArtisanAccountAdress;