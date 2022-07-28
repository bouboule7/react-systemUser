import React from 'react'
export default function SessionEdit(props) {
  return (
    <div className="formulaireAdd"
    style={{
        transform:props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: props.visible ? '1' : '0'
    }}>
        <button className="crois" onClick={props.cacher}>x</button>
        <h1>Add new User</h1>
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
              <div className="ville">
                <p>Veuillez repondre au serie de question pour la processus de recuperation:</p>
                <label htmlFor="nom">Dans quelle ville est vous née:</label>
                <input type="text" name="ville" required/>
                <br/>
                <div className="ecole">
                  <label htmlFor="nom">Quel est le nom de votre ecole:</label>
                  <input type="text" name="ecole" required/>
                  <div className="surnom">
                    <br/>
                    <label htmlFor="nom">Quel est votre surnom:</label>
                    <input type="text" name="surnom" required/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>Press <button>Enter<img className="return" src="https://www.svgrepo.com/show/159223/black-left-arrow.svg" alt="return"/></button> for submit</p>
        </form>
    </div>
  )}
