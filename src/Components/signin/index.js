import React, { Component } from 'react';

import { firebase } from '../../firebase';
import FormField from '../ui/formFields';
import { validate } from '../ui/misc';

class SignIn extends Component {
  state = {
    formError: false,
    formSuccess: '',
    formdata: {
      email: {
        element:'input',
        value: '',
        config: {
          name:'email_input',
          type: 'email',
          placeholder: 'Enter your email'
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ''
      },
      password: {
        element:'input',
        value: '',
        config:{
          name:'password_input',
          type: 'password',
          placeholder: 'Enter your password'
        },
        validation:{
            required: true
        },
        valid: false,
        validationMessage:''
      }
    }
  };

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

  }

  render(){
    return (
      <div className="container">
        <div className="signin_wrapper" style={{margin:'100px'}}>
          <form onSubmit={(event)=> this.submitForm(event)}>
            <h2>Please Login</h2>
            
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;