


const AllArtisan = ({artisans}) =>{
    let noArtisan = artisans.length === 0;

    return(
        <>
            {noArtisan && 
                <section className="noArtisan">
                    <h2>Désolé, nous ne réparons pas encore ici !</h2>
                    <p>On souhaite rendre la réparation accessible à tous alors on y travaille !</p>
                </section>
            }
            {!noArtisan && 
                <section className="allArtisan">
                    {artisans.map(artisan => (
                        <article key={artisan.id}>
                        </article>
                    ))}  
                </section>
            }
        </>
    )
}

export default AllArtisan;