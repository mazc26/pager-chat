import React, { useState } from 'react';

import './Input.scss';

const Input = props => {
  const { ...rest } = props;  
  
  const handleChange = e => {
    props.onChange(e.target.value)
  }

  return (
    <div className="full-width">
      <input
        {...rest}
        type="text"
        value={props.value}
        onChange={handleChange}
        className={props.className ? props.className : "input"} 
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default Input;