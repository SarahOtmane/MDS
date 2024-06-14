



const Command = ({command}) =>{
    return(
        <article className="command row justifycontent_spbetween">
            <img src={command.picture} alt='produit' />
            <div className="column">
                <p>{command.categorie} : {command.clothType} </p>
                <p>{command.besoinType} : {command.reparationType ? command.reparationType : command.broderieType} </p>
            </div>
        </article>
    )
}

export default Command;