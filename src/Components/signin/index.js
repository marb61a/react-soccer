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
        value: ''
      },
      password: {
        element:'input',
        value: ''
      }
    }
  };

  render(){
    return (
      <div className="container">
        <div className="signin_wrapper" style={{margin:'100px'}}>
          <form>
            <h2>Please Login</h2>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;