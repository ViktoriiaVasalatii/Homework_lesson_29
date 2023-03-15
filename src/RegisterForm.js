import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegisterForm.css';

const RegisterForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    acceptTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  });

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, isValidating }) => (
        <Form className="form">
          <div className="form-field">
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" />
          </div>

          <div className="form-field">
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" />
          </div>

          <div className="form-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" />
          </div>

          <div className="form-field checkbox-field">
            <label htmlFor="acceptTerms">
              <Field type="checkbox" name="acceptTerms" />
              Accept Terms &amp; Conditions
            </label>
            <ErrorMessage name="acceptTerms" />
          </div>

          <button className="submit-button" type="submit" disabled={isValidating}>
            Submit
          </button>

        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
