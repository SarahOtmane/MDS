



const JobForm = ({suiteForm, jobs, formData, updateChamps, buttonAble}) =>{
    return(
        <form onSubmit={(e) => suiteForm(e, 'reparation')} className='jobArtisan'>
            <h2>Métier</h2>
            <p>Choisissez votre domaine d’expertise et rejoignez une communauté</p>

            <article className='job_selection column'>
                {jobs.map((job, index) =>(
                    <span 
                        key={index}
                        className={`job_card ${formData.job === job.name ? 'selected' : ''}`}
                        onClick={() => updateChamps({target: {name: 'job', value: job.name}})}
                    >
                        {job.name}
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


export default JobForm;