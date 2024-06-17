import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

import '../../css/accueil.css';

import Titre from '../Titre';
import Etape from '../sections/Etape';
import Newsletter from '../sections/Newsletter';



const Repare = ({setService, setServiceEnvoyeParRepare}) =>{
    const navigate = useNavigate();

    const chooseService = (name) =>{
        setService(name);
        setServiceEnvoyeParRepare(true);
        navigate('/artisans');
    }

    return(
        <main className="repare">
            <Titre titre="Je répare" lien="/repare" classe="backGris"  />
            <h2 className='etape text_uppercase'>pourquoi jeter <br></br> quand on peut réparer</h2>
            <Etape />
            <section className='repareService'>
                <h2>Quel service souhaitez-vous choisir?</h2>
                <p>Nos ateliers-boutiques répartis dans toute la France, vous ouvrent leurs portes pour vous rendre service.</p>
                <form className='row justifycontent_spbetween'>
                    <article>
                        <div>
                            <button onClick={() => chooseService('couture')}>Choisir son artisan</button>
                        </div>
                        <p className='text_uppercase backVert2'>Services couture</p>
                    </article>
                    <article>
                        <div>
                            <button onClick={() => chooseService('maroquinnerie')}>Choisir son artisan</button>
                        </div>
                        <p className='text_uppercase backVert2'>Services maroquinnerie</p>
                    </article>
                    <article>
                        <div>
                            <button onClick={() => chooseService('cordonnerie')}>Choisir son artisan</button>
                        </div>
                        <p className='text_uppercase backVert2'>Services cordonnerie</p>
                    </article>
                </form>
            </section>
            <section className='tuto'>
                <h2>Comment réparer avec RenoWear ?</h2>
                <p>Inutile de nous suivre jusqu'au bout du monde. Suivez juste ce tuto.</p>

                <div>
                <ReactPlayer 
                    url='https://www.youtube.com/watch?v=LrrbQQcOvzc' 
                    controls
                    width="100%"
                    className='video'
                />
                </div>
            </section>
            <section className='row backGris'>
                <article className='row alignitem_center'>
                    <svg width="50" height="50" viewBox="5 15 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 15.5H10.8832L12.0885 27.4769C12.1386 27.8071 12.3064 28.108 12.561 28.3243C12.8156 28.5406 13.1398 28.6576 13.474 28.6538H22.2021C22.5042 28.6696 22.8032 28.5861 23.0534 28.4161C23.3035 28.2461 23.4912 27.9989 23.5875 27.7123L25.4302 22.1738C25.499 21.9656 25.5173 21.7441 25.4836 21.5274C25.4498 21.3107 25.365 21.1052 25.2362 20.9277C25.1021 20.7389 24.9227 20.5868 24.7146 20.4852C24.5065 20.3836 24.2761 20.3358 24.0447 20.3462H11.3681M16.0619 23.1154V25.8846M20.2182 23.1154V25.8846M21.9666 33.5C21.7829 33.5 21.6067 33.4271 21.4768 33.2972C21.3469 33.1674 21.2739 32.9913 21.2739 32.8077C21.2739 32.6241 21.3469 32.448 21.4768 32.3182C21.6067 32.1883 21.7829 32.1154 21.9666 32.1154C22.1503 32.1154 22.3265 32.1883 22.4564 32.3182C22.5863 32.448 22.6593 32.6241 22.6593 32.8077C22.6593 32.9913 22.5863 33.1674 22.4564 33.2972C22.3265 33.4271 22.1503 33.5 21.9666 33.5ZM12.9613 33.5C12.7776 33.5 12.6014 33.4271 12.4715 33.2972C12.3416 33.1674 12.2686 32.9913 12.2686 32.8077C12.2686 32.6241 12.3416 32.448 12.4715 32.3182C12.6014 32.1883 12.7776 32.1154 12.9613 32.1154C13.1451 32.1154 13.3213 32.1883 13.4512 32.3182C13.5811 32.448 13.6541 32.6241 13.6541 32.8077C13.6541 32.9913 13.5811 33.1674 13.4512 33.2972C13.3213 33.4271 13.1451 33.5 12.9613 33.5Z" stroke="#E4A2BE" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>1. Faites un devis pour obtenir une estimation de vos réparations</p>
                </article>
                <article className='row alignitem_center'>
                    <svg width="38" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 6L9.3125 18L4 12.5455" stroke="#E4A2BE" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>2. Préparez vos vêtements / accessoires avant l'envoi</p>
                </article>
                <article className='row alignitem_center'>
                    <svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0853 28.844V19.3928C22.0853 19.0234 21.9347 18.6691 21.6667 18.4079C21.3987 18.1467 21.0352 18 20.6562 18H11.429C11.05 18 10.6865 18.1467 10.4186 18.4079C10.1506 18.6691 10 19.0234 10 19.3928V28.6212C10 28.9906 10.1506 29.3448 10.4186 29.606C10.6865 29.8672 11.05 30.0139 11.429 30.0139H12.5008M28 24.5919H22.0867M26.0765 29.7535H26.5695C26.9485 29.7535 27.312 29.6067 27.58 29.3456C27.848 29.0844 27.9986 28.7301 27.9986 28.3607V24.1825L26.0079 20.2089C25.8903 19.9749 25.7077 19.7778 25.4808 19.6399C25.254 19.5021 24.992 19.429 24.7247 19.429H22.3425M21.2536 30.0139H17.0565M12.5722 30.0557C12.5722 30.5714 12.7824 31.0659 13.1565 31.4305C13.5307 31.7952 14.0381 32 14.5672 32C15.0962 32 15.6037 31.7952 15.9778 31.4305C16.3519 31.0659 16.5621 30.5714 16.5621 30.0557C16.5621 29.5401 16.3519 29.0455 15.9778 28.6809C15.6037 28.3163 15.0962 28.1114 14.5672 28.1114C14.0381 28.1114 13.5307 28.3163 13.1565 28.6809C12.7824 29.0455 12.5722 29.5401 12.5722 30.0557ZM21.628 30.0557C21.628 30.5714 21.8382 31.0659 22.2123 31.4305C22.5864 31.7952 23.0938 32 23.6229 32C24.152 32 24.6594 31.7952 25.0335 31.4305C25.4076 31.0659 25.6178 30.5714 25.6178 30.0557C25.6178 29.5401 25.4076 29.0455 25.0335 28.6809C24.6594 28.3163 24.152 28.1114 23.6229 28.1114C23.0938 28.1114 22.5864 28.3163 22.2123 28.6809C21.8382 29.0455 21.628 29.5401 21.628 30.0557Z" stroke="#E4A2BE" strokeWidth="1.43" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>3. Déposez le sous 21 jours</p>
                </article>
                <article className='row alignitem_center'>
                    <svg width="35" height="48" viewBox="0 0 35 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7272 19.279L16.7633 24.8604L14.2813 22.9999M18.443 30.9176C18.1579 31.0275 17.842 31.0275 17.5569 30.9176C15.332 30.0638 13.4186 28.5557 12.0693 26.5921C10.7201 24.6287 9.99856 22.3024 10 19.9204V16.2301C10 15.9039 10.1297 15.591 10.3605 15.3603C10.5913 15.1296 10.9044 15 11.2308 15H24.7692C25.0956 15 25.4087 15.1296 25.6395 15.3603C25.8703 15.591 26 15.9039 26 16.2301V19.9204C26.0014 22.3024 25.2799 24.6287 23.9307 26.5921C22.5814 28.5557 20.6679 30.0638 18.443 30.9176Z" stroke="#E4A2BE" strokeWidth="1.43" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>4. Recevez vos articles sous 5 à 10 jours</p>
                </article>
            </section>
            <Newsletter />
        </main>
    )
}

export default Repare;