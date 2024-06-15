import Slider from 'react-slick';

import axa from '../../assets/pictures/assurances/axa.svg';
import emmaus from '../../assets/pictures/assurances/emmaus.svg';
import fairtrade from '../../assets/pictures/assurances/fairtrade.svg';
import fashion from '../../assets/pictures/assurances/fashion.svg';
import greenpeace from '../../assets/pictures/assurances/greenpeace.svg';




const AssurancesSlider = () =>{
    const partners = [
        { img: fairtrade, alt: 'Fair Trade' },
        { img: fashion, alt: 'Fashion Revolution' },
        { img: emmaus, alt: 'Emmaüs' },
        { img: axa, alt: 'Axa' },
        { img: greenpeace, alt: 'Greenpeace' }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    
    return(
        <section className="assurancesSlider">
            <h2 className='text_uppercase'>Nos partenaires</h2>
            <Slider {...settings}>
                {partners.map((partner, index) => (
                    <div key={index}>
                        <img 
                        src={partner.img} 
                        alt={partner.alt} 
                        className={partner.img} />
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default AssurancesSlider;