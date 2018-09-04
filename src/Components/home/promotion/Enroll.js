import React, { Component } from 'react';

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

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Enroll;