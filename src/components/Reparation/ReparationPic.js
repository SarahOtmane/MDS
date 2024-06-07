import '../../css/reparation.css';

import { useState } from 'react';

import Titre from "./Titre";
import Newsletter from "../sections/Newsletter";

import reparation from '../../assets/pictures/reparation.png';

const ReparationPic = () =>{
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        setFileName(e.target.files[0]?.name || '');
    };

    return(
        <main className="couture">
            <Titre titre="Couture" lien="/reparation/couture" />
            <section className='loading column'>
                <p>2/3 Votre réparation</p>
                <div class="progress-bar repa2">
                    <div class="green"></div>
                    <div class="black"></div>
                </div>
            </section>
            <section className="couture__contenu row justifycontent_spbetween">
                <img className='repa' src={reparation} alt='' />
                <form className='column'>
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
                    
                    <button className='row'>
                        Continuer 
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2896 11.4958C18.5701 11.7743 18.5701 12.2257 18.2896 12.5042L12.7541 18L11.7384 16.9916L16.766 12L11.7384 7.00845L12.7541 6L18.2896 11.4958Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9972 12.7131H5.5V11.2869H17.9972V12.7131Z" fill="white"/>
                        </svg>
                    </button>
                </form>
            </section>

            <Newsletter />
        </main>
    )
}

export default ReparationPic;