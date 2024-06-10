import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../../css/artisanSign.css';

import Titre from '../../Titre';
import DetailForm from './DetailForm';
import JobForm from './JobForm';
import ReparationFom from './ReparationForm';
import AbonnementForm from './AbonnementForm';


const ArtisanSignUp = () =>{
    //fonctionnement du formulaire : 4 etapes
        //1. recupérer les détails de l'artisan (quand : !suite.metier && !suite.reparation && !suite.abonnement)
        //2. récupérer le metier d expertises (quand : suite.metier && !suite.reparation && !suite.abonnement)
        //3. récupérer les prestations (quand : suite.metier && suite.reparation && !suite.abonnement)
        //4. Payer l abonnement
    //les useState :
        //1. jobs : au chargement de la page on recup tous les jobs en bdd 
        //2. prestations : on recup toutes les prestations en bdd en relation avec le job choisis par l artisan
        //3. formData : on recup les informations de l artisan
        //4. suite : on recup l etape du formulaire
        //5. errors, emailExist: gestion des erreurs
        //6. buttonAble : able and desable le bouton suivant
        //7. showPassword / showConfirmPassword : voir/cacher mot de passe
    //les fonction :
        //1. suiteForm : passer d'une etape du formulaire a la suivante
        //2. submitForm : envoyer les données de l artisan a la bdd
        //3. validate : valider les champs
        //4. updateChamps : update les champs
    



    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [prestations, setPrestations] = useState([]);
    const [buttonAble, setButtonAble] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        reparation: false,
        abonnement: false
    });
    
    const [formData, setFormData] = useState({
        lastname: '',
        firstname: '',
        email: '',
        password: '',
        confirmPassword: '',
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

    const passwordVisible = () =>{setShowPassword(!showPassword)};
    const confirmPasswordVisible = () =>{setShowConfirmPassword(!showConfirmPassword)};

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

            {(!suite.metier && !suite.reparation && !suite.abonnement) && (
                <DetailForm 
                    suiteForm = {suiteForm}  updateChamps={updateChamps}  formData={formData}
                    errors={errors}  showPassword={showPassword} showConfirmPassword={showConfirmPassword}
                    passwordVisible={passwordVisible}  confirmPasswordVisible={confirmPasswordVisible} emailExist={emailExist}
                />
            )}

            {(suite.metier && !suite.reparation && !suite.abonnement) && (
                <JobForm 
                    suiteForm={suiteForm} jobs={jobs} formData={formData} updateChamps={updateChamps} buttonAble={buttonAble}
                />
            )}

            {(suite.metier && suite.reparation && !suite.abonnement) && (
                <ReparationFom 
                    prestations={prestations} suiteForm={suiteForm} formData={formData} setButtonAble={setButtonAble} 
                    setFormData={setFormData} buttonAble={buttonAble}
                />
            )}

            {(suite.metier && suite.reparation && suite.abonnement) && (
                <AbonnementForm 
                />
            )}

        </main>
    )
}

export default ArtisanSignUp;