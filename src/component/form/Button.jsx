import React from 'react'

const Button = (props) => {
  return (
    <div className="form-body">
        <button type="submit" className="btn btn-primary" onClick={props.onClick}>{props.children}</button>
    </div>
  )
}

export default Button;