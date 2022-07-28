import React, { Component } from 'react'
import './NotFound.css'
export default class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <h1>ERROR 404</h1>
        <h1>NOT FOUND</h1>
        <p>Il semblerait que la page que vous demander n'existe pas dans le repertoire.</p>
        <p>Cliquer <a href="/">ici</a> pour revenir a la page d'accueil.</p>
        <h5>MERCI</h5>
      </div>
    )
  }
}
