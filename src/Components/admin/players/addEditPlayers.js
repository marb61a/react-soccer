import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';

import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

class AddEditPlayers extends Component {
  state = {
    playerId:'',
    formType:'',
    formError: false,
    formSuccess:'',
    formdata: {
      name: {
        element:'input',
        value:'',
        config:{
            label: 'Player Name',
            name:'name_input',
            type: 'text'
        },
        validation:{
            required: true
        },
        valid: false,
        validationMessage:'',
        showlabel: true
      },
      lastname: {
        element:'input',
        value:'',
        config:{
            label: 'Player Last name',
            name:'lastname_input',
            type: 'text'
        },
        validation:{
            required: true
        },
        valid: false,
        validationMessage:'',
        showlabel: true
      }
    }
  };

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
      <AdminLayout>
        <div>
          <h2>AddEditPlayers</h2>
          <div>
            <form onSubmit={(event)=> this.submitForm(event)}>
            
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditPlayers;