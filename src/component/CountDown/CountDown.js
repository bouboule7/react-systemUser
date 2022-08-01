import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
    useEffect(()=>{
        restart(expiryTimestamp)
    })
  let {
    seconds,
    minutes,
    hours,
    restart
  } = useTimer({
    expiryTimestamp,
    onExpire: () => alert("onExpire called")
  });
  return (
    <div style={{ textAlign: "center" }}>
      <div>
      {hours>9 ?(<span>{hours}</span>) :(<span>0{hours}</span>)}:
      {minutes>9 ?(<span>{minutes}</span>) :(<span>0{minutes}</span>)}:
      {seconds>9 ?(<span>{seconds}</span>) :(<span>0{seconds}</span>)}
      </div>
    </div>
  );
}

export default function Timer (props){
    
        let time= new Date()
        time.setSeconds(time.getSeconds()+props.ttl);
      return (
        <div>
            <MyTimer expiryTimestamp={time} />
        </div>
        );
   }