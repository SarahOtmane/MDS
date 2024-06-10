import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../../css/artisanSign.css';

import Titre from '../../Titre';


const ArtisanSignUp = () =>{
    //fonctionnement du formulaire : 3 etapes
        //1. recupérer les détails de l'artisan (quand : !suite.metier && !suite.reparation)
        //2. récupérer le metier d expertises (quand : suite.metier && !suite.reparation)
        //3. récupérer les prestations (quand : suite.metier && suite.reparation)
    //les useState :
        //1. jobs : au chargement de la page on recup tous les jobs en bdd 
        //2. prestations : on recup toutes les prestations en bdd en relation avec le job choisis par l artisan
        //3. formData : on recup les informations de l artisan
        //4. suite : on recup l etape du formulaire
        //5. errors, emailExist: gestion des erreurs
        //6. buttonAble : able and desable le bouton suivant
    //les fonction :
        //1. suiteForm : passer d'une etape du formulaire a la suivante
        //2. submitForm : envoyer les données de l artisan a la bdd
        //3. validate : valider les champs
        //4. updateChamps : update les champs
    



    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [prestations, setPrestations] = useState([]);
    const [buttonAble, setButtonAble] = useState(false);

    useEffect(() => {
        const getJob = async () => {
            try {
                const response = await axios.get('http://localhost:3003/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error('Erreur lors de la récup de la liste des jobs:', error); 
            }
        };

        getJob();
    }, []);

    const [suite, setSuite] = useState({
        metier: false,
        reparation: false
    });
    
    const [formData, setFormData] = useState({
        lastname: '',
        firstname: '',
        email: '',
        password: '',
        mobile: '',
        streetAdress: '',
        city: '',
        country: '',
        postalCode: '',
        job: '',
        numeroTVA: '',
        siret: '',
        prestations: [],
    });

    const [errors, setErrors] = useState({});
    const [emailExist, setEmailExist] = useState(false);

    const updateChamps = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.trim()
        });

        if(name === 'job'){
            setButtonAble(true);
        }
    };

    const validate = () => {
        const newErrors = {};
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          newErrors.email = 'Email n\'est pas valide';
        }
    
        // Password validation
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
        if (!passwordRegex.test(formData.password)) {
          newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, une minuscule, un chiffre et un caractère spécial';
        }
    
        // Téléphone validation
        const phoneRegex = /^[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}$/;
        if (!phoneRegex.test(formData.mobile)) {
          newErrors.mobile = 'Le téléphone n\'est pas valide';
        }
    
        setErrors(newErrors);

        //retourne true ou false en fonction de si ya des erreurs ou pas
        return Object.keys(newErrors).length === 0;
    };

    const submitForm = async (e) => {
        e.preventDefault();
    
        if (!validate()) {
          return;
        }
    
        try {
            await axios.post('http://localhost:3003/artisans/register', formData);
            navigate('/artisan/login');
        }catch (error) {
            const status = error.response ? error.response.status : 500;
            switch (status) {
                case 409:
                    setEmailExist(true);
                    break;
                default:
                    console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
            }  
        }
    };

    const suiteForm = async(e, name) =>{
        e.preventDefault();
        if(!buttonAble && suite.metier){
            return;
        }
        setButtonAble(false);
        if(name === 'reparation'){
            let job = jobs.find(job => job.name === formData.job);
            console.log(job.id);
            let id_job = job.id;
            try {
                const response = await axios.get(`http://localhost:3003/prestations/job/${id_job}`);
                setPrestations(response.data);
            } catch (error) {
                console.error('Erreur lors de la récup des prestations:', error); 
            }
        }
        setSuite({
            ...suite,
            [name]: true
        });
    }

    return(
        <main className='artisan_signup'>
            <Titre titre="S'inscrire" lien="/artisan/register" classe="backGris" />

            {(!suite.metier && !suite.reparation) && (
                <form className='detailsArtisan' onSubmit={(e) => suiteForm(e, 'metier')}>
                    <section className='row justifycontent_spbetween'>
                    <div className='column'>
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

                        <label className="text_bold">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="email@gmail.com" 
                            defaultValue={formData.email}
                            onChange={updateChamps}
                            required
                        />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        {emailExist && <p style={{ color: 'red' }}>Cet email est associé à un compte existant.</p>}

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
                        {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}

                        <label className="text_bold">Mot de passe</label>
                        <input 
                            type="password" 
                            name='password'
                            placeholder="Mot de passe" 
                            defaultValue={formData.password}
                            onChange={updateChamps}
                            required
                        />
                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

                        <label className="text_bold">Confirmer votre mot de passe</label>
                        <input 
                            type="password" 
                            name='password'
                            placeholder="Mot de passe" 
                            defaultValue={formData.password}
                            onChange={updateChamps}
                            required
                        />

                        
                    </div>
                    <div className='column'>
                        <label className="text_bold">Adresse</label>
                        <input 
                            type="text" 
                            name='streetAdress'
                            placeholder="Tom" 
                            defaultValue={formData.streetAdress}
                            onChange={updateChamps}
                            required
                        />

                        <label className="text_bold">Ville</label>
                        <input 
                            type="text" 
                            name='city'
                            placeholder="Tom" 
                            defaultValue={formData.city}
                            onChange={updateChamps}
                            required
                        />

                        <label className="text_bold">Code Postal</label>
                        <input 
                            type="text" 
                            name='postalCode'
                            placeholder="Tom" 
                            defaultValue={formData.postalCode}
                            onChange={updateChamps}
                            required
                        />

                        <label className="text_bold">Pays</label>
                        <input 
                            type="text" 
                            name='country'
                            placeholder="Tom" 
                            defaultValue={formData.country}
                            onChange={updateChamps}
                            required
                        />
                        <label className="text_bold">Numéro TVA</label>
                        <input 
                            type="text" 
                            name='numeroTVA'
                            placeholder="FR 93 602 036 444" 
                            defaultValue={formData.numeroTVA}
                            onChange={updateChamps}
                            required
                        />

                        <label className="text_bold">SIRET</label>
                        <input 
                            type="text" 
                            name='siret'
                            placeholder="602 036 444 04227" 
                            defaultValue={formData.siret}
                            onChange={updateChamps}
                            required
                        />
                    </div>
                    </section>

                    <p>En créant un compte, vous acceptez nos conditions d'utilisations et notre politique de confidentialité</p>

                    <button type='submit' className='black'>Créer un compte</button>
                    <p>Vous avez déja un compte ? <a href='/artisan/login' className='text_bold'>Se connecter</a></p>
                </form>
            )}

            {(suite.metier && !suite.reparation) && (
                <form onSubmit={(e) => suiteForm(e, 'reparation')} className='jobArtisan'>
                    <h2>Métier</h2>
                    <p>Choisissez votre domaine d’expertise et rejoignez une communauté</p>
                    <article className='job_selection column'>
                        {jobs.map((job, index) =>(
                            <span 
                                key={index}
                                className={`job_card ${formData.job === job.name ? 'selected' : ''}`}
                                onClick={() => updateChamps({target: {name: 'job', value: job.name}})}
                            >
                                {job.name}
                            </span>
                        ))}
                    </article>
                    <button className={`row alignitem_center black ${buttonAble ? '' : 'notAble'} `}>
                        Suivant 
                        <svg width="24" height="24" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.2896 11.4958C18.5701 11.7743 18.5701 12.2257 18.2896 12.5042L12.7541 18L11.7384 16.9916L16.766 12L11.7384 7.00845L12.7541 6L18.2896 11.4958Z" fill="#999999"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.9972 12.7131H5.5V11.2869H17.9972V12.7131Z" fill="#999999"/>
                        </svg>
                    </button>
                </form>
            )}

            {(suite.metier && suite.reparation) && (
                <form className='jobArtisan reparationArtisan' onSubmit={submitForm}>
                    <h2>Pour quelles expertises souhaitez-vous proposez vos services ?</h2>
                    <p>Choisissez-en autant que vous voulez !</p>
                    <article className='job_selection column'>
                        {prestations.map((prestation, index) =>(
                            <span 
                                key={index}
                                className={`job_card ${formData.prestations.includes(prestation.reparationType) ? 'selected' : ''}`}
                                onClick={() => {
                                    let newPrestations = formData.prestations.includes(prestation.reparationType) 
                                        ? formData.prestations.filter(p => p !== prestation.reparationType) 
                                        : [...formData.prestations, prestation.reparationType];
                                    setButtonAble(true);
                                    setFormData({ ...formData, prestations: newPrestations });
                                }}
                            >
                                {prestation.reparationType}
                            </span>
                        ))}
                    </article>
                    <button className={`row alignitem_center black ${buttonAble ? '' : 'notAble'} `}>
                        Suivant 
                        <svg width="24" height="24" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.2896 11.4958C18.5701 11.7743 18.5701 12.2257 18.2896 12.5042L12.7541 18L11.7384 16.9916L16.766 12L11.7384 7.00845L12.7541 6L18.2896 11.4958Z" fill="#999999"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.9972 12.7131H5.5V11.2869H17.9972V12.7131Z" fill="#999999"/>
                        </svg>
                    </button>
                </form>
            )}

        </main>
    )
}

export default ArtisanSignUp;