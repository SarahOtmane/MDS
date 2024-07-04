import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../service/axiosConfig';

const ArtisanCard = ({ artisan, jobs, setCommand, command }) => {
    const navigate = useNavigate();
    const [note, setNote] = useState(0);
    const [artisanDetail, setArtisanDetail] = useState({});
    const [address, setAddress] = useState({});

    useEffect(() => {
        const getNote = async (id) => {
            try {
                const testimonialResponse = await axiosInstance.get(`/testimonials/artisan/${id}`);
                const testimonials = testimonialResponse.data;
                let somme = 0;

                if (testimonials.length > 0) {
                    for (const testimonial of testimonials) {
                        somme += parseInt(testimonial.stars);
                    }
                }

                return somme / testimonials.length || 0;
            } catch (error) {
                return 0;
            }
        };

        const details = async() =>{
            try {
                const response = await axiosInstance.get(`/artisans/${artisan.id_artisan}`);
                const addressResponse = await axiosInstance.get(`/addresses/${artisan.id_address}`);
                setAddress(addressResponse.data);
                setArtisanDetail(response.data);
                
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        }

        const fetchNote = async () => {
            const noteValue = await getNote(artisan.id_artisan);
            setNote(noteValue);
        };

        details();
        fetchNote();
    }, [artisan.id_artisan, artisan.id_address]);


    const job = jobs.find(job => job.name === artisanDetail.name_job);

    const updateCommand = () =>{
        const job = jobs.find(job => job.name === artisanDetail.name_job);
        const update = {
            ...command,
            id_artisan: artisan.id_artisan,
            job: job.name
        }
        setCommand(update);
        navigate('/user/reparation/details');
    }

    return (
        <article className="row" onClick={updateCommand}>
            <div>
                <p className="pseudo">{artisan.lastname[0]}{artisan.firstname[0]}</p>
                <div className="column metier">
                    <p className="text_capitalize">{job ? job.name : 'Job non trouvé'}</p>
                    <p>Personnalisation</p>
                </div>
            </div>

            <div className="contenu">
                <p className="name">{artisan.lastname} {artisan.firstname}</p>
                <p className="expertise">Expert(e) en {job ? job.name : 'Job non trouvé'}</p>
                <p>{address.streetAddress}</p>
                <p>{address.postalCode} {address.country}</p>
                <p className="note row alignitem_center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4.5L14.472 9.43691L20 10.2334L16 14.0741L16.944 19.5L12 16.9369L7.056 19.5L8 14.0741L4 10.2334L9.528 9.43691L12 4.5Z" fill="#BDDEB4" />
                    </svg>
                    {note.toFixed(1)} / 5
                </p>
                <div className="row metier">
                    <p className="text_capitalize">{job ? job.name : 'Job non trouvé'}</p>
                    <p>Personnalisation</p>
                </div>
            </div>
        </article>
    );
}

export default ArtisanCard;
