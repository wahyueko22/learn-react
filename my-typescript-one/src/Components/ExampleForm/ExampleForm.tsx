import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledForm = styled(Form)`
  max-width: 400px;
  margin: 0 auto;
`;

const StyledFormGroup = styled(Form.Group)`
  margin-bottom: 1rem;
`;

const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const ExampleForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values: { name: string; email: string; password: string; }) => {
    // Handle form submission
    console.log(values);
  };

  const validateForm = (values: { name: string; email: string; password: string; }) => {
    const errors: { name?: string; email?: string; password?: string; } = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validateForm}
    >
      {({ handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledFormGroup controlId="name">
            <Form.Label>Name</Form.Label>
            <Field name="name" type="text" as={Form.Control} />
            <StyledError name="name" component="div" />
          </StyledFormGroup>

          <StyledFormGroup controlId="email">
            <Form.Label>Email</Form.Label>
            <Field name="email" type="email" as={Form.Control} />
            <StyledError name="email" component="div" />
          </StyledFormGroup>

          <StyledFormGroup controlId="password">
            <Form.Label>Password</Form.Label>
            <Field name="password" type="password" as={Form.Control} />
            <StyledError name="password" component="div" />
          </StyledFormGroup>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ExampleForm;