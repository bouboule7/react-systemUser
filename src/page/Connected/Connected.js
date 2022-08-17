import React, { Component } from 'react'
import List from '../../component/List/List'

import Grid from '@mui/material/Grid';
import AddForm from './../../component/AddForm/AddForm';
import ButtonDropDown from '../../component/ButtonDropDown/ButtonDropDown';

export default class Connected extends Component {
  state={
    addUserVisible:false,
    changement:1,
    userName:"",
    groupe:""
  }
  componentDidMount(){
    this.setState({
      userName:this.props.user,
      groupe:this.props.groupe
    })
  }
  setChangement=()=>{
    this.setState({
      changement: this.state.changement+1
    })
  }
  montrer=()=>{
      this.setState({
          addUserVisible:true
      })
  }
  cacher=()=>{
      this.setState({
          addUserVisible:false
      })
  }
  deconnection=(e)=>{
    this.props.deconnection("/")
  }
  render() {
    return (
      <div className="connected">
          <AddForm visible={this.state.addUserVisible} cacher={this.cacher} actualiser={this.setChangement} groupe={this.state.groupe}/>
          <Grid container spacing={2}>
            <Grid xs={2}>
              <h3>User Gestion</h3>
              <h3>{this.props.user}</h3>
              <button onClick={()=>{this.props.deconnection("/")}}>Esc</button>
              <ButtonDropDown deconnection={this.deconnection}/>
              <button onClick={this.montrer}>Add</button>
            </Grid>
            <Grid  xs={10}>
              <List changement={this.state.changement}/>
            </Grid>
          </Grid>
      </div>
    )
  }
}
