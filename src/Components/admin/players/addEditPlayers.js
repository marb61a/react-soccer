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
      },
      number:{
        element:'input',
        value:'',
        config:{
            label: 'Player number',
            name:'number_input',
            type: 'text'
        },
        validation:{
            required: true
        },
        valid: false,
        validationMessage:'',
        showlabel: true
      },
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
        <div className="editplayers_dialog_wrapper">
          <h2>
            { this.state.formType }
          </h2>
          <div>
            <form onSubmit={(event)=> this.submitForm(event)}>
              <FormField 
                id={'name'}
                formdata={this.state.formdata.name}
                change={(element)=> this.updateForm(element)}
              />
              <FormField 
                id={'lastname'}
                formdata={this.state.formdata.lastname}
                change={(element)=> this.updateForm(element)}
              />
              <FormField
                id={'number'}
                formdata={this.state.formdata.number}
                change={(element)=> this.updateForm(element)}
              />
              <FormField
                id={'position'}
                formdata={this.state.formdata.position}
                change={(element)=> this.updateForm(element)}
              />
              <div className="success_label">
                { this.state.formSuccess }
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditPlayers;