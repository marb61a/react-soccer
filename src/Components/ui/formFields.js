import React from 'react';

const FormField = ({ formdata, id, change }) => {
  const showError = () => {
    let errorMessage = <div className="error_label">
      {
        formdata.validation && !formdata.valid ?
        formdata.validationMessage :
        null
       }
    </div>

    return errorMessage;
  };

  const renderTemplate = () => {
    let formTemplate = null;

  };

  return (
    <div>
      { renderTemplate() }
    </div>
  );
};

export default FormField;