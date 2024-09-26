import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema';
import User from './User'


const initialFormValues = {
  first_name: '',
  email: '',
  password: '',
  terms: false
}

const initialFormErrors = {
  first_name: '',
  email: '',
  password: '',
  terms: ''
}

const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(resp => {
      setUsers(resp.data.data);
    }).catch(error => console.log(error))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(resp => {
      setUsers([ resp.data, ...users ]);
    }).catch(error => console.log(error))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]:''}))
    .catch(error => setFormErrors({ ...formErrors, [name]: error.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.terms
    }
    postNewUser(newUser);
  }

  useEffect (() => {
    getUsers()
  }, [])

  useEffect (() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className="App">
        <Form 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />

        {
          users.map(user => {
            return (
              <User key={user.id} details={user}/>
            )
          })
        }
    </div>
  );
}

export default App;
