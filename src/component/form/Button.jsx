import React from 'react'
import '../form/Button.css'

const Button = (props) => {
  return (
    <div>
        <button type="submit" className="btn btn-primary" onClick={props.onClick} disabled={props.isDisabled}>{props.children}</button>
    </div>
  )
}

export default Button;