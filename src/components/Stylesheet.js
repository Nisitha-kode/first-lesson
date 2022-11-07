import React from 'react'
import './myStyles.css'

function Stylesheet () {
  let className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 classname='primary'>Stylesheets</h1>
    </div>
  )
}

export default Stylesheet
