import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../../css/artisanSign.css';

import Titre from '../../Titre';


const ArtisanSignUp = () =>{
    const navigate = useNavigate();
    const [jobs, setJobs] = useState('');
    useEffect(() => {
        const getJob = async () => {
            try {
                const response = await axios.get('http://localhost:3003/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error); 
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
        siret: ''
    });

    const [errors, setErrors] = useState({});
    const [emailExist, setEmailExist] = useState(false);

    const updateChamps = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.trim()
        });
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
            navigate('/user/login');
        }catch (error) {
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
                case 409:
                    setEmailExist(true);
                    break;
                case 500:
                    navigate('/error500');
                    break;
                default:
                    console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
            }  
        }
    };

    const suiteForm = (e, name) =>{
        e.preventDefault();
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
                    <div className='column'>
                        <label className="text_bold">Prénom</label>
                        <input 
                            type="text" 
                            name='firstname'
                            placeholder="Tom" 
                            defaultValue={formData.firstname}
                            onChange={updateChamps}
                            required
                        />

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

                    </div>
                    </section>

                    <p>En créant un compte, vous acceptez nos conditions d'utilisations et notre politique de confidentialité</p>

                    <button type='submit'>Créer un compte</button>
                    <p>Vous avez déja un compte ? <a href='/artisan/login' className='text_bold'>Se connecter</a></p>
                </form>
            )}

            {(suite.metier && !suite.reparation) && (
                <form onSubmit={(e) => submitForm(e, 'reparation')} className='jobArtisan'>
                    <h2>Métier</h2>
                    <p>Choisissez votre, ou vos domaines d’expertises et rejoignez une communauté</p>
                    <article className='job_selection column'>
                        {jobs.map((job, index) =>(
                            <span 
                                key={index}
                                className={`job_card ${formData.job === job.name ? 'selected' : ''}`}
                                onClick={() => updateChamps({target: {name: 'job', value: job.name}})}
                            >
                                {job.name}
                                {console.log(jobs)}
                            </span>
                        ))}
                    </article>
                </form>
            )}

        </main>
    )
}

export default ArtisanSignUp;