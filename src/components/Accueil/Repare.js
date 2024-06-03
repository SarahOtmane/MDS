import ReactPlayer from 'react-player';
import '../../css/accueil.css';

import Titre from '../Titre';
import Etape from '../sections/Etape';
import Newsletter from '../sections/Newsletter';


const Repare = ({command, setCommand}) =>{
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
                        <div></div>
                        <p className='text_uppercase backVert2'>Services couture</p>
                    </article>
                    <article>
                        <div></div>
                        <p className='text_uppercase backVert2'>Services couture</p>
                    </article>
                    <article>
                        <div></div>
                        <p className='text_uppercase backVert2'>Services couture</p>
                    </article>
                </form>
            </section>
            <section className='tuto'>
                <h2>Comment réparer avec RenoWear ?</h2>
                <p>Inutile de nous suivre jusqu'au bout du monde. Suivez juste ce tuto.</p>

                <div>
                <ReactPlayer 
                    url='https://www.youtube.com/watch?v=NZFNKqtfLT0' 
                    controls
                    width="100%"
                    className='video'
                />
                </div>
            </section>
            <Newsletter />
        </main>
    )
}

export default Repare;