import '../../css/reparation.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Titre from "./Titre";
import Newsletter from "../sections/Newsletter";

import reparation from '../../assets/pictures/reparation.png';

const ReparationPic = ({ command, setCommand }) => {
    const [fileName, setFileName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setCommand({ ...command, picture: file });
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!command.picture) {
            setError('Veuillez ajouter une photo.');
        } else {
            setError('');
            // Navigate to the next step or handle the form submission logic
            navigate('/user/reparation/confirmation');
        }
    };

    return (
        <main className="couture">
            <Titre titre="Couture" lien="/reparation/couture" />
            <section className='loading column'>
                <p>2/3 Votre réparation</p>
                <div className="progress-bar repa2">
                    <div className="green"></div>
                    <div className="black"></div>
                </div>
            </section>
            <section className="couture__contenu row justifycontent_spbetween">
                <img className='repa' src={reparation} alt='' />
                <form className='column' onSubmit={handleSubmit}>
                    <label>Ajoute une photo</label>
                    <div className='inputPics'>
                        <input 
                            type='file' 
                            accept="image/*" 
                            id="fileUpload" 
                            onChange={handleFileChange}
                            style={{ display: 'none' }} 
                        />
                        <label htmlFor="fileUpload" className="custom-file-upload">
                            {fileName || '+ Ajoute une photo'}
                        </label>
                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <button className='row' type='submit'>
                        Continuer 
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.2896 11.4958C18.5701 11.7743 18.5701 12.2257 18.2896 12.5042L12.7541 18L11.7384 16.9916L16.766 12L11.7384 7.00845L12.7541 6L18.2896 11.4958Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.9972 12.7131H5.5V11.2869H17.9972V12.7131Z" fill="white"/>
                        </svg>
                    </button>
                </form>
            </section>

            <Newsletter />
        </main>
    );
};

export default ReparationPic;
