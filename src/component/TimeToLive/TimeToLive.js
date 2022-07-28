import React from 'react'

export default function TimeToLive(props) {
  return (
    <div className="sessionEdit"
        style={{
            display:props.visible ? 'contents' : 'none',
            opacity: props.visible ? '1' : '0'
        }}>
            <p>Edit your session time</p>
            <form>
                <label htmlFor="nom"> Time session :</label>
                <input type="number" className="nom" name="nom" required/>
                <label htmlFor="nom"> s :</label>
            <p>Press <button>Enter<img className="return" src="https://www.svgrepo.com/show/159223/black-left-arrow.svg" alt="return"/></button> for submit</p>
            </form>
        </div>
  )
}
