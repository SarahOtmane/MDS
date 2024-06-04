


const AllArtisan = ({artisans}) =>{
    let noArtisan = true;

    if(artisans.length > 0)  noArtisan = false;

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