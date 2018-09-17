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

    }
  };

  submitForm(event) {
    event.preventDefault();
    
  }

  render(){
    return (
      <AdminLayout>
        <div>
          <h2>AddEditPlayers</h2>
          <div>
          
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditPlayers;