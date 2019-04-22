import React, { Component } from 'react';
import Router from 'next/router';

import Panel from '../components/Panel.js';
import Form from 'react-jsonschema-form';

import '../static/bootstrap.min.css';

import getApp from '../utils/feathers.js';

const REGISTER_SCHEMA = {
  title: "Register",
  type: "object",
  required: ["email", "password", "confirm_password"],
  properties: {
    email: { type: "string", title: "email" },
    password: { type: "string", title: "Password" },
    confirm_password: { type: "string", title: "Confirm Password"}
  }
};

const REGISTER_UI_SCHEMA = {
  password: {
    'ui:widget':'password'
  },
  confirm_password : {
    'ui:widget':'password'
  }
}

export default class LoginPage extends Component {

  async register({ formData }) {
    const app = await getApp()
    const users = app.service('users')
    await users.create(formData)
    Router.push('/')
  }

  validate(formData, errors){
    if (formData.password !== formData.confirm_password) {
      errors.confirm_password.addError("Passwords don't match");
    }
    return errors;
  }

  render() {
    return (
      <Panel>
        <Form
          schema={REGISTER_SCHEMA}
          uiSchema={REGISTER_UI_SCHEMA}
          onSubmit={this.register.bind(this)}
          validate={this.validate.bind(this)}
          />
      </Panel>
    )
  }
}