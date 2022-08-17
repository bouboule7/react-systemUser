import React, { Component } from 'react'
import './AddForm.css'
export default class Modal extends Component{
  constructor(props){
    super(props)
    this.state={
      userName:"",
      password:""
    }
  }
  handleChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    }) 

    console.log("a"+event.target.value)
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    alert("submit")

    const requestOption={
      method:'POST',
      body: JSON.stringify({
        userName: this.state.userName,
        password: this.state.password,
        groupe:this.props.groupe
        })
    };
      fetch("http://localhost:8081/addUser", requestOption).then(response=>response.json())
        .then(data=>{
          if(data.success){
            this.props.actualiser();
          }      
        })
        .catch((err)=>{
          alert("error"+err.message);
        })
        this.setState=({
          userName:"",
          password:""
        })
        this.inputName.value=""
        this.inputPassword.value=""
        this.props.cacher()
  }
  render(){
  return (
    <div className="formulaireAdd"
    style={{
        transform:this.props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: this.props.visible ? '1' : '0'
    }}>
        <button className="crois" onClick={this.props.cacher}>x</button>
        <h1>Add new User</h1>
        <form  onSubmit={ (e)=>{this.handleSubmit(e)}}>
          <p>Remplisser les champs suivant:</p>
          <label htmlFor="nom"> Name:</label>
          <input type="text" className="nom" name="userName" ref={el => this.inputName = el} onChange={(event)=>{this.handleChange(event); console.log("s"); }} required/>
          <br/>
          <div className="password">
            <label htmlFor="">Password: </label>
            <input placeholder="*****" className="passwordInput" name="password" ref={el => this.inputPassword = el} onChange={(event)=>{this.handleChange(event) }} required type="password"/>
          </div>
          <p>Press <button>Enter<img className="return" src="https://www.svgrepo.com/show/159223/black-left-arrow.svg" alt="return"/></button> for submit</p>
        </form>
    </div>
  )
}
}
