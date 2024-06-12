


const AllArtisan = ({ artisans, notFound }) => {
    return (
        <>
            {notFound ? (
                <section className="noArtisan">
                    <h2>Désolé, nous ne réparons pas encore ici !</h2>
                    <p>On souhaite rendre la réparation accessible à tous alors on y travaille !</p>
                </section>
            ) : (
                <section className="allArtisan">
                    {artisans.map(artisan => (
                        <article key={artisan.id}>
                        </article>
                    ))}  
                </section>
            )}
        </>
    );
};

export default AllArtisan;