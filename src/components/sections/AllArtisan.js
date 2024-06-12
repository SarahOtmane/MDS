import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axiosInstance from '../../axiosConfig';

import ArtisanCard from "./ArtisanCard";

const AllArtisan = ({ artisans, notFound }) => {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getJobs = async () => {
            try {
                const jobsResponse = await axiosInstance.get('/jobs');
                setJobs(jobsResponse.data);
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
        getJobs();
    }, [navigate]);


    return (
        <>
            {notFound ? (
                <section className="noArtisan">
                    <h2>Désolé, nous ne réparons pas encore ici !</h2>
                    <p>On souhaite rendre la réparation accessible à tous alors on y travaille !</p>
                </section>
            ) : (
                <section className="allArtisan row justifycontent_spbetween">
                    {artisans.map(artisan => (
                        <ArtisanCard key={artisan.id} artisan={artisan} jobs={jobs} />
                    ))}
                </section>
            )}
        </>
    );
};

export default AllArtisan;
