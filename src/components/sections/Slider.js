import { useEffect, useState } from "react";


const Slider = () =>{

    const slides = [{
        couleur: 'backRose2',
        titre: 'Au-delà du prêt-à-porter',
        text: 'Réparez vos anciens vetementss cachées dans vos placard.',
        button: 'Réaliser un devis'
    },{
        couleur: 'backVert2',
        titre: 'Style extra-ordinairement tissé',
        text: `Moins cher et meilleur pour la planète. 
                Faites revivre votre garde-robe!`,
        button: 'Réaliser un devis'
    },{
        couleur: 'black',
        titre: 'Réparer plutôt que jeter',
        text: 'Le ménage de printemps qui rend tout le monde content.',
        button: 'Réaliser un devis'
    },];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [exitingIndex, setExitingIndex] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setExitingIndex(currentIndex);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds
    
        return () => clearInterval(interval); 
      }, [currentIndex, slides.length]);

    return(
        <section className="slider">
            {slides.map((slide, index) => (
                <article
                    key={index}
                    className={`
                        slide 
                        ${slide.couleur} 
                        ${index === currentIndex ? 'active' : ''} 
                        ${index === exitingIndex ? 'slide-exit' : ''}
                    `.trim()}
                >

                    <div className="slide-content">
                        <h2>{slide.titre}</h2>
                        <p>{slide.text}</p>
                        <button>{slide.button}</button>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default Slider;