

import password from '../../../assets/pictures/password.svg';


const DetailForm = ({suiteForm, updateChamps, formData, errors, showPassword, showConfirmPassword, passwordVisible, confirmPasswordVisible, emailExist}) =>{
    return(
        <form className='detailsArtisan' onSubmit={(e) => suiteForm(e, 'metier')}>
            <section className='row justifycontent_spbetween'>
                <div className='column'>
                    <label className="text_bold">Nom</label>
                    <input 
                        type="text" 
                        name='lastname'
                        placeholder="Cruz" 
                        defaultValue={formData.lastname}
                        onChange={updateChamps}
                        required
                    />

                    <label className="text_bold">Prénom</label>
                    <input 
                        type="text" 
                        name='firstname'
                        placeholder="Tom" 
                        defaultValue={formData.firstname}
                        onChange={updateChamps}
                        required
                    />

                    <label className="text_bold">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="email@gmail.com" 
                        defaultValue={formData.email}
                        onChange={updateChamps}
                        required
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    {emailExist && <p style={{ color: 'red' }}>Cet email est associé à un compte existant.</p>}

                    <label className="text_bold">Téléphone</label>
                    <input 
                        type="tel" 
                        pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" 
                        name='mobile'
                        placeholder="06 36 46 79 12" 
                        defaultValue={formData.mobile}
                        onChange={updateChamps}
                        required
                    />
                    {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}

                    <label className="text_bold">Mot de passe</label>
                    <div className='divInput column'>
                        <img src={password} alt='svg' onClick={passwordVisible}/>
                        <input 
                            type={showPassword ? "text" : "password"}
                            name='password'
                            placeholder="Mot de passe" 
                            defaultValue={formData.password}
                            onChange={updateChamps}
                            required
                        />
                    </div>
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

                    <label className="text_bold">Confirmer votre mot de passe</label>
                    <div className='divInput column'>
                        <img src={password} alt='svg' onClick={confirmPasswordVisible}/>
                        <input 
                            type={showConfirmPassword ? "text" : "password"}
                            name='password'
                            placeholder="Mot de passe" 
                            defaultValue={formData.confirmPassword}
                            onChange={updateChamps}
                            required
                        />
                    </div>
                        
                </div>
                <div className='column'>
                    <label className="text_bold">Adresse</label>
                    <input 
                        type="text" 
                        name='streetAdress'
                        placeholder="Tom" 
                        defaultValue={formData.streetAdress}
                        onChange={updateChamps}
                        required
                    />

                    <label className="text_bold">Ville</label>
                    <input 
                        type="text" 
                        name='city'
                        placeholder="Tom" 
                        defaultValue={formData.city}
                        onChange={updateChamps}
                        required
                    />

                    <label className="text_bold">Code Postal</label>
                    <input 
                        type="text" 
                        name='postalCode'
                        placeholder="Tom" 
                        defaultValue={formData.postalCode}
                        onChange={updateChamps}
                        required
                    />

                    <label className="text_bold">Pays</label>
                    <input 
                        type="text" 
                        name='country'
                        placeholder="Tom" 
                        defaultValue={formData.country}
                        onChange={updateChamps}
                        required
                    />

                    <label className="text_bold">Numéro TVA</label>
                    <input 
                        type="text" 
                        name='numeroTVA'
                        placeholder="FR 93 602 036 444" 
                        defaultValue={formData.numeroTVA}
                        onChange={updateChamps}
                        required
                    />

                    <label className="text_bold">SIRET</label>
                    <input 
                        type="text" 
                        name='siret'
                        placeholder="602 036 444 04227" 
                        defaultValue={formData.siret}
                        onChange={updateChamps}
                        required
                    />
                </div>
            </section>

            <p>En créant un compte, vous acceptez nos conditions d'utilisations et notre politique de confidentialité</p>

            <button type='submit' className='black'>Créer un compte</button>

            <p>Vous avez déja un compte ? <a href='/artisan/login' className='text_bold'>Se connecter</a></p>

        </form>
    )
}

export default DetailForm;