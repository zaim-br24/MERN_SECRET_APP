import React from "react"


const FormRow = ({ type, name, value, handleChange, labelText, placeholder, accept}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {/* {labelText || name} */}
        {labelText}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className='form-input'
        placeholder={placeholder}
        accept={accept}
      />
    </div>
  )
}
  
  export default FormRow