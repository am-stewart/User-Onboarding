import React from 'react';



export default function Form(props) {
  const { values, submit, change, disabled, errors } = props

  const onSubmit = event => {
    event.preventDefault()
    submit()
    }
  
  const onChange = event => {
    const { name, value, checked, type } = event.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
    }
    
  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <h2>Add a User</h2>
        
        <label>First Name
          <input
            value={values.first_name}
            onChange={onChange}
            name='first_name'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='email'
          />
        </label>

        <label>Password
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>

        <label>Terms
          <input
            checked={values.terms}
            onChange={onChange}
            name='terms'
            type='checkbox'
          />
        </label>

        <button disabled={disabled}>Submit</button>
        <div className='errors'>
          <div>{/*name error*/}</div>
          <div>{/*email error*/}</div>
          <div>{/*password error*/}</div>
          <div>{/*terms error*/}</div>
        </div>
      </div>
        
      <div className='submitted users'>
        <h2>Current Users</h2>
      </div>
    </form>
  )
}