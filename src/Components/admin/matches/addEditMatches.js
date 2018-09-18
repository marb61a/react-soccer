import React, { Component } from 'react';

import AdminLayout from '../../../Hoc/AdminLayout';
import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

class AddEditMatch extends Component {
  state = {
    matchId:'',
    formType:'',
    formError: false,
    formSuccess:'',
    teams:[],
    formdata: {
      date: {
        element: 'input',
        value: '',
        config: {
          label: 'Event date',
          name:'date_input',
          type: 'date'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage:'',
        showlabel: true
      },
      local: {
        element: 'select',
        value: '',
        config: {
          label: 'Select a local team',
          name:'select_local',
          type: 'select',
          options: []
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage:'',
        showlabel: false
      }
    }
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

  render() {
    return (
      <AdminLayout>
        <div>
          <h2>AddEditMatch</h2>
          <div>
            <form>
            
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditMatch;