import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axiosInstance from '../../service/axiosConfig';

import ArtisanCard from "./ArtisanCard";

const AllArtisan = ({ artisans, notFound, setCommand, command }) => {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getJobs = async () => {
            try {
                const jobsResponse = await axiosInstance.get('/jobs');
                setJobs(jobsResponse.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
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
                        <ArtisanCard key={artisan.id} artisan={artisan} jobs={jobs} setCommand={setCommand} command={command} />
                    ))}
                    {artisans.map(artisan => (
                        <ArtisanCard key={artisan.id} artisan={artisan} jobs={jobs} setCommand={setCommand} command={command} />
                    ))}
                    {artisans.map(artisan => (
                        <ArtisanCard key={artisan.id} artisan={artisan} jobs={jobs} setCommand={setCommand} command={command} />
                    ))}
                </section>
            )}
        </>
    );
};

export default AllArtisan;
