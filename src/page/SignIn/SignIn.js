import React, { Component } from 'react'
import './SignIn.css'

export default class SignIn extends Component {
  constructor(props){
    super(props)
    this.state={
      userName:"",
      password:""
    }
  }
  handleSubmit=(e)=>{
    e.preventDefault();

    const requestOption={
      method:'POST',
      body: JSON.stringify({username:this.state.userName,password:this.state.password})
    };
      fetch("http://localhost:8081/signin", requestOption).then(response=>response.json())
        .then(data=>{
          if(data.find){
            this.props.changeUser(this.state.userName,data.groupe)
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
        this.inputName.value = ""
        this.inputPassword.value=""
  }
  onChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  render() {
    return (
      <div> hello
        <p>LINUX 20.04 LTS misa-CLI-AX2L-50MF</p>
        <form onSubmit={ (e)=>{this.handleSubmit(e)}}>
          <label htmlFor="login">{'>'}misa-CLI-AX2L-50MF login: </label>
          <input placeholder="....." type="text" name="userName" required className="login" onChange={ (event)=>{this.onChange(event) }} ref={el => this.inputName = el}/>
          <br/>
          <div className="password">
            <label htmlFor="">{'>'}pass: </label>
            <input placeholder="*****" className="passwordInput" name="password" required type="password" onChange={ (event)=>{this.onChange(event) }} ref={el => this.inputPassword = el}/>
          </div>          
          <p>Press <button type="submit">Enter<img className="return" src="https://www.svgrepo.com/show/159223/black-left-arrow.svg" alt="return"/></button> for submit</p>
        </form>
        <div className="d-flex">
          <button onClick={this.props.Deconnection}>Validate</button>
          <a href="/signup">Create new session</a>
          <a href="/password">Forgot password?</a>
          
        </div>
      </div>
    )
  }
}
