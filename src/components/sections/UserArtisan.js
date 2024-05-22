import particulier from '../../assets/pictures/landingPage/particuliers.png';
import artisan from '../../assets/pictures/landingPage/artisans.png';
import deco3 from '../../assets/pictures/picto/deco3.png';
import deco4 from '../../assets/pictures/picto/deco4.png';


const UserArtisan = () =>{
    return(
        <section className='userArtisan backGris'>
            <img className='picto' id="deco3" src={deco3} alt='' />
            <img className='picto' id="deco4" src={deco4} alt='' />
            <span className='text_uppercase text_bold'>RenoWear</span>
            <h2 className='text_capitalize'>pour qui ?</h2>
            <div className='row justifycontent_spbetween'>
                <figure>
                    <img src={particulier} alt='' />
                    <p className='text_uppercase text_bold'>Les <br></br> particuliers</p>
                </figure>
                <figure>
                    <img src={artisan} alt='' />
                    <p className='text_uppercase text_bold'>Les <br></br> artisans</p>
                </figure>
            </div>
        </section>
    )
}

export default UserArtisan;