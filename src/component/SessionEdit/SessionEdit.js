import React from 'react'
export default function SessionEdit(props) {
  return (
    <div className="formulaireAdd"
    style={{
        transform:props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: props.visible ? '1' : '0'
    }}>
        <button className="crois" onClick={props.cacher}>x</button>
        <h1>Edit your information</h1>
        <form>
          <p>Remplisser les champs suivant:</p>
          <label htmlFor="nom"> Name:</label>
          <input type="text" className="nom" name="nom" required/>
          <br/>
          <div className="password">
            <label htmlFor="">Password: </label>
            <input placeholder="*****" className="passwordInput" required type="password"/>
            <br/>
            <div className="groupe">
              <label htmlFor="nom">Groupe:</label>
              <input type="text" name="groupe" required/>
              <br/>
              <div className="password2">
                <label htmlFor="password2">Veuillez saisir votre mot de passe pour confirmer les changements</label>
              </div>
            </div>
          </div>
          <p>Press <button>Enter<img className="return" src="https://www.svgrepo.com/show/159223/black-left-arrow.svg" alt="return"/></button> for submit</p>
        </form>
    </div>
  )}
