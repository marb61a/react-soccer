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
      },
      away: {
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
      resultAway: {
        element: 'input',
        value: '',
        config: {
          label: 'Result local',
          name:'result_local_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage:'',
        showlabel: false
      },
      referee: {
        element: 'input',
        value: '',
        config: {
          label: 'Referee',
          name:'referee_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage:'',
        showlabel: true
      },
      stadium: {
        element: 'input',
        value: '',
        config: {
          label: 'Stadium',
          name:'stadium_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage:'',
        showlabel: true
      }
    }
  }

  updateForm(element) {
    const newFormdata = {...this.state.formdata};
    const newElement = { ...newFormdata[element.id]};

    newElement.value = element.event.target.value;

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
    newFormdata[element.id] = newElement;

    this.setState({
      formError: false,
      formdata: newFormdata
    });
  }

  updateFields(match, teamOptions, teams, type, matchId) {
    const newFormdata = {
      ...this.state.formdata
    };

    for(let key in newFormdata) {
      if(match) {
        newFormdata[key].value = match[key];
        newFormdata[key].valid = true;
      }

      if(key === 'local' || key === 'away') {
        newFormdata[key].config.options = teamOptions;
      }

      this.setState({
        matchId,
        formType:type,
        formdata: newFormdata,
        teams
      })
    }
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

    this.state.teams.forEach((team) => {
      if(team.shortName === dataToSubmit.local) {
        dataToSubmit['localThmb'] =  team.thmb;
      }

      if(team.shortName === dataToSubmit.away) {
        dataToSubmit['awayThmb'] =  team.thmb;
      }
    });

    if(formIsValid) {
      if(this.state.formType === 'Edit Match'){

      } else {

      }

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
              <div className="select_team_layout">
                <div className="label_inputs">Local</div>
                <div className="wrapper">
                  <div className="left">
                    <FormField 
                      id={'local'}
                      formdata={this.state.formdata.local}
                      change={(element)=> this.updateForm(element)}
                    />
                  </div>
                  <div>
                    <FormField
                      id={'resultLocal'}
                      formdata={this.state.formdata.resultLocal}
                      change={(element)=> this.updateForm(element)}
                    />
                  </div>
                </div>
              </div>
              <div className="select_team_layout">
                <div className="label_inputs">Away</div>
                <div className="wrapper">
                  <div className="left">
                    <FormField 
                      id={'away'}
                      formdata={this.state.formdata.away}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                  <div>
                    <FormField 
                      id={'resultAway'}
                      formdata={this.state.formdata.resultAway}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                </div>
              </div>
              <div className="split_fields">
                <FormField 
                  id={'referee'}
                  formdata={this.state.formdata.referee}
                  change={(element) => this.updateForm(element)}
                />
                <FormField
                  id={'stadium'}
                  formdata={this.state.formdata.stadium}
                  change={(element) => this.updateForm(element)}
                />
              </div>

            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditMatch;