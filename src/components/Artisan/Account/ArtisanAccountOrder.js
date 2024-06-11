import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axiosConfig';

import '../../../css/account.css';

import ArtisanAccountMenu from './ArtisanAccountMenu';
import Titre from "../../Titre";


const ArtisanAccountOrder = () =>{
    const navigate = useNavigate();
    const [commands, setCommands] = useState([]);

    useEffect(() => {
        const getCommands = async () => {
            try {
                const response = await axiosInstance.get('/commands/artisans');
                setCommands(response.data);
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

        getCommands();
    }, [navigate]);

    return(
        <main>
            <Titre titre="Mon compte" lien="/artisan/my-account/update-password" classe="backGris" />
            <div className='row account'>
                <ArtisanAccountMenu selected="commandes" />
                <section className='commandes'>
                    {commands.length > 0 ? (
                        <article>
                            

                        </article>
                    ) : (
                            <article>
                            <svg width="130" height="128" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M59.1663 32H43.1663L37.833 40H27.1663L21.833 32H5.83301" stroke="#5C5F6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.033 13.627L5.83301 32.0003V48.0003C5.83301 49.4148 6.39491 50.7714 7.3951 51.7716C8.3953 52.7718 9.75185 53.3337 11.1663 53.3337H53.833C55.2475 53.3337 56.604 52.7718 57.6042 51.7716C58.6044 50.7714 59.1663 49.4148 59.1663 48.0003V32.0003L49.9663 13.627C49.5248 12.7384 48.8441 11.9906 48.0009 11.4677C47.1576 10.9448 46.1852 10.6675 45.193 10.667H19.8063C18.8141 10.6675 17.8417 10.9448 16.9985 11.4677C16.1552 11.9906 15.4745 12.7384 15.033 13.627Z" stroke="#5C5F6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <p>L’historique de vos commandes est en attente d’être rempli.</p>
                        </article>
                    )}
                </section>
            </div>
        </main>
    )
}

export default ArtisanAccountOrder;