import '../css/global.css';

import Service from './sections/Service';
import Fonctionnement from './sections/Fonctionnement';
import Avis from './sections/Avis';

const Home = () =>{

    return(
        <main className='home'>
            <Service />
            <Fonctionnement />
            <Avis />
        </main>
    )
}

export default Home;