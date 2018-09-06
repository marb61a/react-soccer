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

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if(formIsValid){

    } else {
      
    }
  } 

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
            <form onSubmit={ (event)=> this.submitForm(event) }>
              <div className="enroll_title">
                Enter Your Email
              </div>
              <div className="enroll_input">
                <FormField 
                  id={'email'}
                  formdata={this.state.formdata.email}
                  change={(element)=> this.updateForm(element)}
                />
                {
                  this.state.formError ?
                  <div className="error_label">
                    Something is wrong, try again.
                  </div> :
                  null
                }
                <div className="success_label">
                  {this.state.formSuccess}
                </div>
                <button onClick={(event)=> this.submitForm(event)}>
                  Enroll
                </button>
                <div className="enroll_disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua.
                </div>
              </div>
            </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;