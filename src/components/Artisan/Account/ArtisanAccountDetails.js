import React, { useEffect, useState} from 'react';
import axiosInstance from '../../../axiosConfig';

import '../../../css/account.css';

import ArtisanAccountMenu from './ArtisanAccountMenu';
import Titre from "../../Titre";
import { useNavigate } from 'react-router-dom';


const ArtisanAccountDetails = () =>{
    const navigate = useNavigate();
    const [artisan, setArtisan] = useState({});
    const [update, setUpdate] = useState(false);

    const [formData, setFormData]=useState({
        lastname: '',
        firstname: '',
        mobile: '',
    });

    useEffect(() => {
        const getArtisan = async () => {
            try {
                const response = await axiosInstance.get('/artisans');
                setArtisan(response.data);
                setFormData({
                    lastname: response.data.lastname,
                    firstname: response.data.firstname,
                    mobile: response.data.mobile,
                });
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
        setFormData({
            ...formData,
            [name]: value.trim()
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        const data = {
            ...artisan,
            lastname: formData.lastname,
            firstname: formData.firstname,
            mobile: formData.mobile,
        }
    
        try {
            await axiosInstance.put('artisans', data);
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
                    console.error('Erreur lors de l\'enregistrement de l\'artisan:', error);
            }  
        }
    };


    return(
        <main>
            <Titre titre="Mon compte" lien="/artisan/my-account/details" classe="backGris" />
            
            <div className='row account'>
                <ArtisanAccountMenu selected="details" />
                <section className='details'>
                    {update &&  <p className='messageGreen'>
                        <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 6L9.3125 18L4 12.5455" stroke="#057234" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Informations mises à jous avec succès
                    </p>}
                    <form className='details column' onSubmit={submitForm}>
                        <h2>Détails du compte</h2>
                        <p className='pseudo'>{formData.lastname[0]}{formData.firstname[0]}</p>
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

export default ArtisanAccountDetails;