import React, { Component } from 'react'
import './SignUp.css'
export default class SignUp extends Component {
  state={
    userName:"",
    password:"",
    password2:"",
    groupe:"",
    ville:"",
    ecole:"",
    surnom:""
  }
  onChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })

    if(this.inputGroupe.value===""){this.inputGroupe.value=this.state.userName; this.setState({groupe:this.inputGroupe.value})} 
  }
  handleSubmit=(e)=>{
    e.preventDefault();

    const requestOption={
      method:'POST',
      body: JSON.stringify({
        userName: this.state.userName,
        password: this.state.password,
        password2: this.state.password2,
        groupe: this.state.groupe,
        ville: this.state.ville,
        ecole: this.state.ecole,
        surnom: this.state.surnom
        })
    };
      fetch("http://localhost:8081/signup", requestOption).then(response=>response.json())
        .then(data=>{
          if(data.success){
            this.props.connection("/list")
          }      
        })
        .catch((err)=>{
          alert("error"+err.message);
        })
        this.setState=({
          userName:"",
          password:""
        })
  }
  render() {
    return (
      <div className="signup">
        <h1>New User:</h1>
        <form action="/send" method="post"  onSubmit={ (e)=>{this.handleSubmit(e)}}>
          <p>Remplisser les champs suivant:</p>
          <label htmlFor="nom"> Name:</label>
          <input type="text" className="nom" name="userName" onChange={ (event)=>{this.onChange(event) }} required/>
          <br/>
          <div className="password">
            <label htmlFor="">Password: </label>
            <input placeholder="*****" className="passwordInput" name="password"  onChange={ (event)=>{this.onChange(event) }} required type="password"/>
            <br/>
            <div className="password2">
              <label htmlFor="">Confirm Password: </label>
              <input placeholder="*****" className="passwordInput2" required name="password2" onChange={ (event)=>{this.onChange(event) }} type="password"/>
              <br/>
              <div className="groupe">
                <label htmlFor="nom">Groupe:</label>
                <input type="text" name="groupe" onChange={ (event)=>{this.onChange(event) }} required ref={el => this.inputGroupe = el}/>
                <br/>
                <div className="ville">
                  <p>Veuillez repondre au serie de question pour la processus de recuperation:</p>
                  <label htmlFor="nom">Dans quelle ville est vous née:</label>
                  <input type="text" name="ville" onChange={ (event)=>{this.onChange(event) }} required/>
                  <br/>
                  <div className="ecole">
                    <label htmlFor="nom">Quel est le nom de votre ecole:</label>
                    <input type="text" name="ecole" onChange={ (event)=>{this.onChange(event) }} required/>
                    <div className="surnom">
                      <br/>
                      <label htmlFor="nom">Quel est votre surnom:</label>
                      <input type="text" name="surnom" onChange={ (event)=>{this.onChange(event) }} required/>
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

