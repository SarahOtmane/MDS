import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Slider = () => {
    const navigate = useNavigate();

    const slides = [{
        couleur: 'backRose2',
        titre: 'Au-delà du prêt-à-porter',
        text: 'Réparez vos anciens vêtements cachés dans vos placards.',
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
    }];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % slides.length;
                setNextIndex((newIndex + 1) % slides.length);
                return newIndex;
            });
        }, 2000); 

        return () => clearTimeout(timeout);
    }, [currentIndex, slides.length]);

    return (
        <section className="slider">
            {slides.map((slide, index) => (
                <article
                    key={index}
                    className={`
                        slide 
                        ${slide.couleur} 
                        ${index === currentIndex ? 'active' : ''} 
                        ${index === nextIndex ? 'next' : ''}
                    `.trim()}
                >
                    <div className="slide-content">
                        <h2>{slide.titre}</h2>
                        <p>{slide.text}</p>
                        <button onClick={() => navigate('/repare')}>
                            {slide.button} 
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.2896 5.49578C13.5701 5.77425 13.5701 6.22575 13.2896 6.50422L7.75414 12L6.73841 10.9916L11.766 6L6.73841 1.00845L7.75414 0L13.2896 5.49578Z" fill="#999999"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.9972 6.71308H0.5V5.28692H12.9972V6.71308Z" fill="#999999"/>
                            </svg>
                        </button>
                    </div>
                </article>
            ))}
        </section>
    );
}

export default Slider;
