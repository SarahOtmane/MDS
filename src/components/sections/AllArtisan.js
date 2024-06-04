


const AllArtisan = ({artisan}) =>{
    let noArtisan = true;

    if(artisan.length > 0)  noArtisan = false;
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
                    <div>
                    </div>
                </section>
            }
        </>
    )
}

export default AllArtisan;