import { useState } from "react";
import axios from 'axios';




const Newsletter = () =>{
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [validate, setValidate] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();
    
        try {
            await axios.post('http://localhost:3004/newsletter', {email});
            setValidate(true);
        } catch (error) {
            setError(true);
        }
    };

    return(
        <section className="newsletter column backGris">
            <article className="row">
                <div>
                    <h3 className="text_capitalize">Rejoignez notre newsletter</h3>
                    <span>Nous aimons vous surprendre avec des cadeaux occasionnels.</span>
                </div>

                {error && <p style={{ color: 'red' }}>Une erreur c'est produite !</p>}
                {validate && <p style={{ color: 'green' }}>Inscription avec succès</p>}
                <form className="row" onSubmit={submitForm}>
                    <input 
                        type="email"
                        placeholder="Votre e-mail" 
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="black">S'inscrire</button>
                </form>
            </article>
        </section>
    )
}

export default Newsletter;