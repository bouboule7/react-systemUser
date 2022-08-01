import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import SessionEdit from './../SessionEdit/SessionEdit';
import TimeToLive from '../TimeToLive/TimeToLive';
import Timer from './../CountDown/CountDown'
class ButtonDropDown extends React.Component {
  state={
    sessionEditVisible:false,
    timeTiLive:false,
    timeTL:300
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

  setTTL=(temps)=>{
    this.setState({
      timeTL:temps
    })
  }
  render(){
  return (
    <div className="dropDown">
        <button>Setting <SettingsIcon/> </button >
        <ul>
            <li><button onClick={this.montrerSessionEdit} >Edit Session <EditIcon /></button></li>
            <SessionEdit visible={this.state.sessionEditVisible} cacher={this.cacherSessionEdit} />
            <li><button onClick={this.montrerTimeToLive}>TimeToLive <HourglassBottomIcon /> <Timer ttl={this.state.timeTL}/></button></li>
            <TimeToLive visible={this.state.timeTiLive} setTTL={this.setTTL}/>
        </ul>
    </div>
  );
  }
}
export default ButtonDropDown;
