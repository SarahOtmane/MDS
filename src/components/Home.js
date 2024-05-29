import '../css/homeLanding.css';

import Service from './sections/Service';
import Fonctionnement from './sections/Fonctionnement';
import Avis from './sections/Avis';
import Newsletter from './sections/Newsletter';
import Slider from './sections/Slider';

const Home = () =>{

    return(
        <main className='home'>
            <Slider />
            <Service />
            <Fonctionnement />
            <Avis />
            <h2 className="text_uppercase newsletter backGris">construisez une relation durables avec vos articles</h2>
            <Newsletter />
        </main>
    )
}

export default Home;