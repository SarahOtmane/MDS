import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axiosConfig';

import '../../../css/account.css';

import ArtisanAccountMenu from './ArtisanAccountMenu';
import Titre from "../../Titre";




const ArtisanAccountJob = () =>{
    const navigate = useNavigate();
    const [data, setData] = useState({
        job: '',
        prestations: [],
        clothes: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Obtenir le job_id de l'artisan
                const artisanResponse = await axiosInstance.get('/artisans');
                const id_job = artisanResponse.data.id_job;

                // Obtenir le nom du job
                const jobResponse = await axiosInstance.get(`/jobs/id/${id_job}`);
                const jobName = jobResponse.data.name;

                // Obtenir les prestations lié au job
                const prestationsResponse = await axiosInstance.get(`/prestations/job/${id_job}`);
                const prestations = prestationsResponse.data;

                // Obtenir les vêtements lié au job
                const clothesResponse = await axiosInstance.get(`/clothes/job/${id_job}`);
                const clothes = clothesResponse.data;

                // Mettre à jour l'état
                setData({
                    job: jobName,
                    prestations: prestations,
                    clothes: clothes
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
                        console.error('Erreur lors de la récupération des données:', error);
                }
            }
        };

        fetchData();
    }, [navigate]);

    return(
        <main>
            <Titre titre="Mon compte" lien="/user/my-account/adress" classe="backGris" />
            <div className='row account'>
                <ArtisanAccountMenu selected="job" />
                <section className='artisanJobs'>
                    <h2>Métier</h2>
                    <p>Vous avez choisi votre domaine d’expertise.</p>
                    <p>Sélectionnez vos compétences</p>
                </section>
            </div>
        </main>
    )
}

export default ArtisanAccountJob;