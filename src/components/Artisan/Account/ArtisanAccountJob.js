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
                const artisanResponse = await axiosInstance.get('/artisans');
                const id_job = artisanResponse.data.id_job;

                const jobResponse = await axiosInstance.get(`/jobs/id/${id_job}`);
                const jobName = jobResponse.data.name;

                const prestationsResponse = await axiosInstance.get(`/prestations/job/${id_job}`);
                const prestations = prestationsResponse.data;

                const clothesResponse = await axiosInstance.get(`/clothes/job/${id_job}`);
                const clothes = clothesResponse.data;

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
                    <span className='text_capitalize'>{data.job}</span>
                    <div>
                        <h2>Expertises</h2>

                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Catégories</th>
                                    <th>Pièces</th>
                                    <th>Réparations</th>
                                    <th>Prix admin</th>
                                    <th>Prix</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.clothes.map((cloth) => (
                                    data.prestations.map((presta, prestaIndex) => (
                                        <tr key={`${cloth.id}-${prestaIndex}`}>
                                            <td>
                                                <input type="checkbox" id={`checkbox-${cloth.id}-${prestaIndex}`} className="checkbox" />
                                                <label htmlFor={`checkbox-${cloth.id}-${prestaIndex}`} className="custom-checkbox"></label>
                                            </td>
                                            <th>{cloth.categorie}</th>
                                            <th>{cloth.clothType}</th>
                                            <th>{presta.reparationType}</th>
                                            <th>{presta.priceSuggested}</th>
                                            <th>Prix</th>
                                        </tr>
                                    ))
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default ArtisanAccountJob;
