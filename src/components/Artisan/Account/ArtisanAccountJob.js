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
    });

    const [checkedItems, setCheckedItems] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const artisanResponse = await axiosInstance.get('/artisans');
                const id_job = artisanResponse.data.id_job;

                const jobResponse = await axiosInstance.get(`/jobs/id/${id_job}`);
                const jobName = jobResponse.data.name;

                const prestationsResponse = await axiosInstance.get(`/prestations/job/${id_job}`);
                const prestations = prestationsResponse.data;

                setData({
                    job: jobName,
                    prestations: prestations,
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

    const checkboxChange = (prestaId) => {
        setCheckedItems(prevState => {
            const newState = { ...prevState };
            newState[prestaId] = !newState[prestaId];
            return newState;
        });
    };

    const InputChange = (e, prestaId) => {
        const { value } = e.target;
        setCheckedItems(prevState => {
            const newState = { ...prevState };
            newState[`${prestaId}-price`] = value;
            return newState;
        });
    };

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
                                    <th>Prix admin</th>
                                    <th>Prix</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.prestations.map((presta) => (
                                    <tr key={`${presta.id}`}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                id={`checkbox-${presta.id}`}
                                                className="checkbox"
                                                checked={checkedItems[presta.id] || false}
                                                onChange={() => checkboxChange(presta.id)}
                                            />
                                            <label htmlFor={`checkbox-${presta.id}`} className="custom-checkbox"></label>
                                        </td>
                                        <th>{presta.reparationType}</th>
                                        <th>{presta.priceSuggested}</th>
                                        <th>
                                            {checkedItems[presta.id] ? (
                                                <input
                                                    type="number"
                                                    value={checkedItems[`${presta.id}-price`] || ''}
                                                    onChange={(e) => InputChange(e, presta.id)}
                                                />
                                            ) : presta.priceSuggested}
                                        </th>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button className='blakc'> Valider </button>
                </section>
            </div>
        </main>
    )
}

export default ArtisanAccountJob;
