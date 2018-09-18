import React, { Component } from 'react';

import AdminLayout from '../../../Hoc/AdminLayout';
import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

import { 
  firebaseTeams , firebaseDB, firebaseMatches 
} from '../../../firebase';
import { firebaseLooper } from '../../ui/misc';

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
      },
      resultLocal:{
        element:'input',
        value:'',
        config:{
            label: 'Result local',
            name:'result_local_input',
            type: 'text'
        },
        validation:{
            required: true
        },
        valid: false,
        validationMessage:'',
        showlabel: false
      }
    }
  }

  updateForm(element) {
    const newFormdata = {...this.state.formdata};
    const newElement = { ...newFormdata[element.id]};

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
        <div className="editmatch_dialog_wrapper">
          <h2>
            { this.state.formType }
          </h2>
          <div>
            <form onSubmit={(event)=> this.submitForm(event)}>
              <FormField 
                id={'date'}
                formdata={this.state.formdata.date}
                change={(element)=> this.updateForm(element)}
              />
              
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditMatch;