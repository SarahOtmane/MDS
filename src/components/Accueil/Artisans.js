
import Titre from "../Titre";
import Section1NosArtisans from "../sections/Section1NosArtisans";



const Artisans = () =>{
    return(
        <main className="artisans">
            <Titre titre="Nos artisans" lien="/artisans" classe="backGris" />
            <Section1NosArtisans />
        </main>
    )
}

export default Artisans;