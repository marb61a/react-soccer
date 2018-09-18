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

  updateForm(element) {
    const newFormdata = {...this.state.formdata}
    const newElement = { ...newFormdata[element.id]}
    
  }

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    if(formIsValid) {

    } else {
      this.setState({
        formError: true
      });
    }
  }

  render(){
    return (
      <div className="container">
        <div className="signin_wrapper" style={{margin:'100px'}}>
          <form onSubmit={(event)=> this.submitForm(event)}>
            <h2>Please Login</h2>
            <FormField 
              id={'email'}
              formdata={this.state.formdata.email}
              change={(element) => this.updateForm(element)}
            />
            <FormField 
              id={'password'}
              formdata={this.state.formdata.password}
              change={(element)=> this.updateForm(element)}
            />
            {
              this.state.formError ?
              <div className="error_label">
                An error has occurred, please try again
              </div> : null
            }
            <button onClick={(event) => this.submitForm(event)}>
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;