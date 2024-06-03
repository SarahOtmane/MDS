import particulier from '../../assets/pictures/landingPage/particuliers.png';
import artisan from '../../assets/pictures/landingPage/artisans.png';


const UserArtisan = () =>{
    return(
        <section className='userArtisan backGris'>
            <section>
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
        </section>
    )
}

export default UserArtisan;