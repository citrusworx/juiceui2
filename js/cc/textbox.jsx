import React from 'react'

function Textbox(props) {
  return (
    <div>
        <h3>{props.heading}</h3>
        <p>
            {props.text}
        </p>
    </div>
  )
}

export default Textbox