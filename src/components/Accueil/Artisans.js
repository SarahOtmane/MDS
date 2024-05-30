import { useState } from 'react';
import axios from 'axios';

import '../../css/accueil.css';

import Titre from "../Titre";
import Newsletter from "../sections/Newsletter";
import ArtisanService from '../sections/ArtisanService';
import AllArtisan from '../sections/AllArtisan';


const Artisans = () =>{
    const [recherche, setRecherche] = useState(false);
    const [artisan, setArtisan] = useState([]);
    const [formData, setFormData] =useState({
        job: '',
        postalCode: ''
    });

    const updateChamps = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.trim()
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        if((formData.job === '') && (formData.postalCode === '')){
            return 
        }
    
        try {
            let data ={ job: formData.job,  postalCode: formData.postalCode}
            if(formData.job === ''){
                data.job = '-1';
            }else{
                const job = await axios.get(`http://localhost:3003/jobs/${data.job}`);
                data.job = job.data.id
            }

            if(formData.postalCode === '') data.postalCode = '-1';

            const artisans = await axios.get(`http://localhost:3003/artisans/${data.job}/${data.postalCode}`);
            setArtisan(artisans);
            setRecherche(true);
            
        }catch (error) {
            console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
        }
    };

    return(
        <main className="artisans backGris">
            <Titre titre="Nos artisans" lien="/artisans" />
            <section className="backGris renowear" >
                <article>
                <h2 className="backVert2">RenoWear</h2>
                <h2 className="backVert2">& ses artisans</h2>
                </article>
            </section>
            <section className='recherche'>
                <form className='row justifycontent_spbetween' onSubmit={submitForm}>
                    <input
                        name='job'
                        placeholder='Domaine, Spécialités ...'
                        defaultValue={formData.job}
                        onChange={updateChamps}
                    />
                    <input 
                        name='postalCode'
                        placeholder='Où ?'
                        defaultValue={formData.postalCode}
                        onChange={updateChamps}
                    />
                    <button type='submit'>
                        Rechercher 
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2252 18.4798C13.28 18.4798 15.2507 17.6635 16.7037 16.2105C18.1566 14.7575 18.9729 12.7869 18.9729 10.7321C18.9729 8.67725 18.1566 6.70659 16.7037 5.25362C15.2507 3.80065 13.28 2.98438 11.2252 2.98438C9.17041 2.98438 7.19976 3.80065 5.74679 5.25362C4.29381 6.70659 3.47754 8.67725 3.47754 10.7321C3.47754 12.7869 4.29381 14.7575 5.74679 16.2105C7.19976 17.6635 9.17041 18.4798 11.2252 18.4798Z" stroke="#999999" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20.5224 21.0156L16.5781 17.0713" stroke="#999999" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </form>
            </section>
            {recherche && <AllArtisan artisan={artisan} />}
            {!recherche && <ArtisanService />}
            <Newsletter />
        </main>
    )
}

export default Artisans;