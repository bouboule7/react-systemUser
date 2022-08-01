import React, { Component } from 'react'
import './SignIn.css'

export default class SignIn extends Component {
  render() {
    return (
      <div> hello
        <p>LINUX 20.04 LTS misa-CLI-AX2L-50MF</p>
        <form method="post" action="http://localhost:8081/signin">
          <label htmlFor="login">{'>'}misa-CLI-AX2L-50MF login: </label>
          <input placeholder="....." type="text" required className="login"/>
          <br/>
          <div className="password">
            <label htmlFor="">{'>'}pass: </label>
            <input placeholder="*****" className="passwordInput" required type="password"/>
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
