import React from 'react'

export default function TimeToLive(props) {
    function handleChange(event) {
        const entrer=parseInt(event.target.value);
        props.setTTL(entrer);
    
    }
  return (
    <div className="sessionEdit"
        style={{
            display:props.visible ? 'contents' : 'none',
            opacity: props.visible ? '1' : '0'
        }}>
            <p>Edit your session time</p>
            <form>
                <label htmlFor="nom"> Time session :</label>
                <input type="number" className="nom" name="nom" onChange={handleChange}/>
                <label htmlFor="nom"> s</label>
            </form>
        </div>
  )
}
