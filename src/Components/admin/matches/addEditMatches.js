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

      }
    }
  }

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;
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