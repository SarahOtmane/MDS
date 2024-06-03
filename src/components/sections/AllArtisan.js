


const AllArtisan = ({artisan}) =>{
    let noArtisan = true;

    if(artisan.length > 0)  noArtisan = false;
    return(
        <>
            {noArtisan && <></>}
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