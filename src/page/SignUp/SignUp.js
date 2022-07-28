import React, { Component } from 'react'
import './SignUp.css'
export default class SignUp extends Component {
  render() {
    return (
      <div className="signup">
        <h1>New User:</h1>
        <form action="/send" method="post">
          <p>Remplisser les champs suivant:</p>
          <label htmlFor="nom"> Name:</label>
          <input type="text" className="nom" name="nom" required/>
          <br/>
          <div className="password">
            <label htmlFor="">Password: </label>
            <input placeholder="*****" className="passwordInput" required type="password"/>
            <br/>
            <div className="password2">
              <label htmlFor="">Confirm Password: </label>
              <input placeholder="*****" className="passwordInput2" required type="password"/>
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
          </div>
          <p>Press <button>Enter<img className="return" src="https://www.svgrepo.com/show/159223/black-left-arrow.svg" alt="return"/></button> for submit</p>
        </form>
        <button type="submit" onClick={this.props.Deconnection}>Changer de status</button>
      </div>
    )
  }
}