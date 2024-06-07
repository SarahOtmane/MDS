import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import Titre from "../Titre";
import Newsletter from "../sections/Newsletter";


const Aide = () =>{
    return(
        <main className="aide">
            <Titre titre="Aide" lien="/aide" classe="backGris" />
            <section className="backImg section">
                <h2 className="text_capitalize">Besoin d'aide? nous sommes là. </h2>
                <div>
                    <h3>Questions les plus fréquemment posées</h3>
                    <Accordion className='accordion'>
                        <AccordionSummary
                            aria-controls="delais-content"
                            id="delais-header"
                        >
                            Quels sont les délais de livraison ?
                        </AccordionSummary>
                        <AccordionDetails>
                            Nous réparons vos textiles et vos accessoires en cuir (sacs et chaussures) sous 7 à 15 jours, à compter de la réception de votre colis chez nos artisans. Vous pourrez ensuite récupérez vos pièces sous un délai de 2 à 3 jours ouvrés.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordion'>
                        <AccordionSummary
                            aria-controls="contact-content"
                            id="contact-header"
                        >
                            Comment contacter RenoWear ?
                        </AccordionSummary>
                        <AccordionDetails>
                            N’hésitez pas à contacter notre service après-vente à l’adresse suivante : contact@RenoWear.fr ou par téléphone au 06 90 56 43 12. 
                            <br></br>
                            Si vous n’êtes pas satisfait de vos retouches / réparations.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordion'>
                        <AccordionSummary
                            aria-controls="probleme-content"
                            id="probleme-header"
                        >
                            Et si j’ai un problème une fois mes pièces reçues ?
                        </AccordionSummary>
                        <AccordionDetails>
                            Un rendez-vous de réajustement est prévu si vous n’êtes pas satisfait de vos retouches. Et si le problème n'est pas récupérable, ce qui serait très surprenant, nous travaillons avec AXA assurance afin d'assurer toutes vos pièces.
                        </AccordionDetails>
                    </Accordion>
                </div>
            </section>
            <Newsletter />
        </main>
    )
}

export default Aide;