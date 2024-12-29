import React from 'react'

interface TextboxProps {
    heading: string;
    text: string;
}

function Textbox(props: TextboxProps) {
  return (
    <div>
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
    </div>
  )
}

export default Textbox