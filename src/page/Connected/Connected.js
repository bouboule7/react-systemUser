import React, { Component } from 'react'
import List from '../../component/List/List'

import Grid from '@mui/material/Grid';
import AddForm from './../../component/AddForm/AddForm';
import ButtonDropDown from '../../component/ButtonDropDown/ButtonDropDown';

export default class Connected extends Component {
  state={
    addUserVisible:false
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
  render() {
    return (
      <div className="connected">
          <AddForm visible={this.state.addUserVisible} cacher={this.cacher}/>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <h3>User Gestion</h3>
              <button onClick={this.props.Deconnection}>Esc</button>
              <ButtonDropDown/>
              <button onClick={this.montrer}>Add</button>
            </Grid>
            <Grid  xs={9}>
              <List/>
            </Grid>
          </Grid>
      </div>
    )
  }
}
