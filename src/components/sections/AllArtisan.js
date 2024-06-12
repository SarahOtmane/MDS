import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../axiosConfig';



const AllArtisan = ({ artisans, notFound }) => {
    const navigate = useNavigate();
    const [jobs, setJobs] =useState([]);

    useEffect(() =>{
        const getJobs = async () =>{
            try {
                const jobsResponse = await axiosInstance('/jobs');
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
        }
        getJobs();
    }, [navigate]);

    const getNote = (id) =>{
        try {
            const testimonialResponse = axiosInstance.get(`/testimonials/artisan/${id}`);
            const testimonials = testimonialResponse.data;
            let somme;

            if(testimonials.length === 0) somme = 0;
            else{
                for(const testimonial of testimonials){
                    somme += parseInt(testimonial.stars)
                }
            }

            return somme;
        } catch (error) {
            return 0
        }
    }   

    return (
        <>
            {notFound ? (
                <section className="noArtisan">
                    <h2>Désolé, nous ne réparons pas encore ici !</h2>
                    <p>On souhaite rendre la réparation accessible à tous alors on y travaille !</p>
                </section>
            ) : (
                <section className="allArtisan row justifycontent_spbetween">
                    {artisans.map(artisan => {
                        const job = jobs.find(job => job.id === artisan.id_job);
                        const note = getNote(artisan.id);

                        return(
                            <article key={artisan.id} className="row">
                            <p className="pseudo">{artisan.lastname[0]}{artisan.firstname[0]}</p>
                            <div>
                                <div className="row">
                                    <p>{artisan.lastname} {artisan.firstname}</p>
                                    <a href='/'>
                                        En savoir plus 
                                            <svg width="39" height="8" viewBox="0 0 39 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM38.3536 4.35355C38.5488 4.15829 38.5488 3.84171 38.3536 3.64645L35.1716 0.464466C34.9763 0.269204 34.6597 0.269204 34.4645 0.464466C34.2692 0.659728 34.2692 0.976311 34.4645 1.17157L37.2929 4L34.4645 6.82843C34.2692 7.02369 34.2692 7.34027 34.4645 7.53553C34.6597 7.7308 34.9763 7.7308 35.1716 7.53553L38.3536 4.35355ZM1 4.5H38V3.5H1V4.5Z" fill="#030303"/>
                                            </svg>
                                    </a>
                                </div>
                                <p>Expert(e) en {job.name}</p>
                                <p>{artisan.streetAdress}</p>
                                <p>{artisan.postalCode} {artisan.country}</p>
                                <p>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4.5L14.472 9.43691L20 10.2334L16 14.0741L16.944 19.5L12 16.9369L7.056 19.5L8 14.0741L4 10.2334L9.528 9.43691L12 4.5Z" fill="#BDDEB4"/>
                                    </svg>
                                    {note} / 5
                                </p>
                                <div className="row">
                                    <p className="capitalize">{job.name}</p>
                                    <p>Personnalisation</p>
                                </div>
                            </div>
                            </article>
                        )
                    })} 


{artisans.map(artisan => {
                        const job = jobs.find(job => job.id === artisan.id_job);
                        const note = getNote(artisan.id);

                        return(
                            <article key={artisan.id} className="row">
                            <p className="pseudo">{artisan.lastname[0]}{artisan.firstname[0]}</p>
                            <div>
                                <div className="row">
                                    <p>{artisan.lastname} {artisan.firstname}</p>
                                    <a href='/'>
                                        En savoir plus 
                                            <svg width="39" height="8" viewBox="0 0 39 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM38.3536 4.35355C38.5488 4.15829 38.5488 3.84171 38.3536 3.64645L35.1716 0.464466C34.9763 0.269204 34.6597 0.269204 34.4645 0.464466C34.2692 0.659728 34.2692 0.976311 34.4645 1.17157L37.2929 4L34.4645 6.82843C34.2692 7.02369 34.2692 7.34027 34.4645 7.53553C34.6597 7.7308 34.9763 7.7308 35.1716 7.53553L38.3536 4.35355ZM1 4.5H38V3.5H1V4.5Z" fill="#030303"/>
                                            </svg>
                                    </a>
                                </div>
                                <p>Expert(e) en {job.name}</p>
                                <p>{artisan.streetAdress}</p>
                                <p>{artisan.postalCode} {artisan.country}</p>
                                <p>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4.5L14.472 9.43691L20 10.2334L16 14.0741L16.944 19.5L12 16.9369L7.056 19.5L8 14.0741L4 10.2334L9.528 9.43691L12 4.5Z" fill="#BDDEB4"/>
                                    </svg>
                                    {note} / 5
                                </p>
                                <div className="row">
                                    <p className="capitalize">{job.name}</p>
                                    <p>Personnalisation</p>
                                </div>
                            </div>
                            </article>
                        )
                    })} 

{artisans.map(artisan => {
                        const job = jobs.find(job => job.id === artisan.id_job);
                        const note = getNote(artisan.id);

                        return(
                            <article key={artisan.id} className="row">
                            <p className="pseudo">{artisan.lastname[0]}{artisan.firstname[0]}</p>
                            <div>
                                <div className="row">
                                    <p>{artisan.lastname} {artisan.firstname}</p>
                                    <a href='/'>
                                        En savoir plus 
                                            <svg width="39" height="8" viewBox="0 0 39 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM38.3536 4.35355C38.5488 4.15829 38.5488 3.84171 38.3536 3.64645L35.1716 0.464466C34.9763 0.269204 34.6597 0.269204 34.4645 0.464466C34.2692 0.659728 34.2692 0.976311 34.4645 1.17157L37.2929 4L34.4645 6.82843C34.2692 7.02369 34.2692 7.34027 34.4645 7.53553C34.6597 7.7308 34.9763 7.7308 35.1716 7.53553L38.3536 4.35355ZM1 4.5H38V3.5H1V4.5Z" fill="#030303"/>
                                            </svg>
                                    </a>
                                </div>
                                <p>Expert(e) en {job.name}</p>
                                <p>{artisan.streetAdress}</p>
                                <p>{artisan.postalCode} {artisan.country}</p>
                                <p>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4.5L14.472 9.43691L20 10.2334L16 14.0741L16.944 19.5L12 16.9369L7.056 19.5L8 14.0741L4 10.2334L9.528 9.43691L12 4.5Z" fill="#BDDEB4"/>
                                    </svg>
                                    {note} / 5
                                </p>
                                <div className="row">
                                    <p className="capitalize">{job.name}</p>
                                    <p>Personnalisation</p>
                                </div>
                            </div>
                            </article>
                        )
                    })} 
                </section>
            )}
        </>
    );
};

export default AllArtisan;