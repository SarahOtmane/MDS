



const ReparationFom = ({prestations, suiteForm, formData, setButtonAble, setFormData, buttonAble}) =>{
    return(
        <form className='jobArtisan reparationArtisan' onSubmit={(e) => suiteForm(e, 'abonnement')}>
            <h2>Pour quelles expertises souhaitez-vous proposez vos services ?</h2>
            <p>Choisissez-en autant que vous voulez !</p>
            <article className='job_selection column'>
                {prestations.map((prestation, index) =>(
                    <span 
                        key={index}
                        className={`job_card ${formData.prestations.includes(prestation.reparationType) ? 'selected' : ''}`}
                        onClick={() => {
                            let newPrestations = formData.prestations.includes(prestation.reparationType) 
                                ? formData.prestations.filter(p => p !== prestation.reparationType) 
                                : [...formData.prestations, prestation.reparationType];
                            setButtonAble(true);
                            setFormData({ ...formData, prestations: newPrestations });
                        }}
                    >
                        {prestation.reparationType}
                    </span>
                ))}
            </article>
            <button className={`row alignitem_center black ${buttonAble ? '' : 'notAble'} `}>
                Suivant 
                <svg width="24" height="24" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.2896 11.4958C18.5701 11.7743 18.5701 12.2257 18.2896 12.5042L12.7541 18L11.7384 16.9916L16.766 12L11.7384 7.00845L12.7541 6L18.2896 11.4958Z" fill="#999999"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9972 12.7131H5.5V11.2869H17.9972V12.7131Z" fill="#999999"/>
                </svg>
            </button>
        </form>
    )
}

export default ReparationFom;