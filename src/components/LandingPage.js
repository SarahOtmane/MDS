import mockup from '../assets/pictures/landing_mockup.png';

const LandingPage = () =>{
    return(
        <main className="landing">
            <section className="section1 backGris row">
                <article>
                    <h1 className='text_uppercase'>pourquoi jeter quand on peut réparer ?</h1>
                    <p>Le concept de réparation et de consommation de vêtements durables</p>
                    <p>Faites le tri dans vos habits.</p>
                    <p className='text_bold'>Télécharger RenoWear</p>
                    <div className='row'>
                        <button>

                        </button>
                        <button>

                        </button>
                    </div>
                </article>
                <img src={mockup} alt='' />
            </section>
        </main>
    )
}


export default LandingPage;