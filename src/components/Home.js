import '../css/global.css';

import Service from './sections/Service';
import Fonctionnement from './sections/Fonctionnement';
import Avis from './sections/Avis';
import Newsletter from './sections/Newsletter';

const Home = () =>{

    return(
        <main className='home'>
            <Service />
            <Fonctionnement />
            <Avis />
            <Newsletter />
        </main>
    )
}

export default Home;