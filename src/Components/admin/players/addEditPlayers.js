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
      position: {
        element: 'select',
        value: '',
        config: {
          label: 'Select a position',
          name: 'select_position',
          type: 'select',
          options: [
            {key:"Keeper",value:"Keeper"},
            {key:"Defence",value:"Defence"},
            {key:"Midfield",value:"Midfield"},
            {key:"Striker",value:"Striker"}
          ]
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage:'',
        showlabel: true
      }
    }
  };

  updateFields = (player, playerId, formType) => {
    const newFormdata = { ...this.state.formdata};

    for(let key in newFormdata) {
      newFormdata[key].value = match[key];
      newFormdata[key].valid = true;
    }

    this.setState({
      playerId,
      formType,
      formdata: newFormdata,
    })
  }

  updateForm(element, content = '') {
    const newFormdata = {...this.state.formdata};
    const newElement = { ...newFormdata[element.id]};

    if(content === '') {
      newElement.value = element.event.target.value;      
    } else {
      newElement.value = content;
    }

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
    newFormdata[element.id] = newElement;

    this.setState({
      formError: false,
      formdata: newFormdata
    });
  }

  successForm(message) {
    this.setState({
      formSuccess: message
    });

    setTimeout(() => {
      this.setState({
        formSuccess: ''
      });
    }, 2000);
  }

  submitForm(event) {
    event.preventDefault();
    
    let dataToSubmit = {};
    let formIsValid = true;

    for(let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    };

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