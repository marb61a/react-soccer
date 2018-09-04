import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

class Enroll extends Component {
  state = {
    formError:false,
    formSuccess:'',
    formdata: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email'
        },
        validation: {
          required: true,
          email: true
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

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
            <form onSubmit={ (event)=> this.submitForm(event) }>
              <div>
              
              </div>
            </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;