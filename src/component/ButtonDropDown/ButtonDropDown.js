import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import SessionEdit from './../SessionEdit/SessionEdit';
import TimeToLive from '../TimeToLive/TimeToLive';
class ButtonDropDown extends React.Component {
  state={
    sessionEditVisible:false,
    timeTiLive:false
  }
  montrerTimeToLive =()=>{
      this.setState({
        timeTiLive:!this.state.timeTiLive,
      })
  }
  montrerSessionEdit=()=>{
      this.setState({
        sessionEditVisible:true
      })
  }
  cacherSessionEdit=()=>{
    this.setState({
      sessionEditVisible:false,
    })
  }
  render(){
  return (
    <div className="dropDown">
        <button>Setting <SettingsIcon/> </button >
        <ul>
            <li><button onClick={this.montrerSessionEdit} >Edit Session <EditIcon /></button></li>
            <SessionEdit visible={this.state.sessionEditVisible} cacher={this.cacherSessionEdit} />
            <li><button onClick={this.montrerTimeToLive}>TimeToLive <HourglassBottomIcon /></button></li>
            <TimeToLive visible={this.state.timeTiLive} />
        </ul>
    </div>
  );
  }
}
export default ButtonDropDown;
