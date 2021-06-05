import { Card, Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import { formStyle } from '../utils';

const UserForm = ({ selectedField, onSubmit }) => {
  const [fields, setFields] = useState({ firstName: '', lastName: '' });
  const handleChange = e => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(fields);
  };
  const disabled = !(fields.firstName && fields.lastName);
  const firstNameIsInput = selectedField === 'firstName';
  return (
    <Card style={{ margin: '1rem 1rem 0 0' }}>
      <form onSubmit={handleSubmit}>
        <fieldset style={formStyle.createUser}>
          <legend>| Create User |</legend>
          <TextField
            focused={firstNameIsInput}
            placeholder={firstNameIsInput && 'backdoor({ input })'}
            name="firstName"
            label="First Name"
            variant="outlined"
            value={fields.firstName}
            onChange={handleChange}
          />
          <TextField
            focused={!firstNameIsInput}
            placeholder={!firstNameIsInput && 'backdoor({ input })'}
            name="lastName"
            label="Last Name"
            variant="outlined"
            value={fields.lastName}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit" disabled={disabled}>
            Submit
          </Button>
        </fieldset>
      </form>
    </Card>
  );
};

export default UserForm;
