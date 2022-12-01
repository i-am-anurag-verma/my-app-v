import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button type="submit" className="btn btn-primary" onClick={() => console.log('====button clicked!')}>{props.children}</button>
    </div>
  )
}

export default Button