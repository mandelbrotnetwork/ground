import React, { Component } from 'react';
import Router from 'next/router';

import Panel from '../components/Panel.js';
import Form from 'react-jsonschema-form';

import '../static/bootstrap.min.css';

import getApp from '../utils/feathers.js';

const LOGIN_SCHEMA = {
  title: "Login",
  type: "object",
  required: ["email", "password"],
  properties: {
    email: { type: "string", title: "email" },
    password: { type: "string", title: "Password" }
  }
};

const LOGIN_UI_SCHEMA = {
  password: {
    'ui:widget':'password'
  }
}

export default class LoginPage extends Component {

  async login({ formData }) {
    const app = await getApp()

    const authenticated = await app.authenticate({
      strategy: 'local',
      ...formData
    }).catch(e => {
      console.warn(e)
      return null
    })

    Router.push('/')
  }

  render() {
    return (
      <Panel>
        <Form
          schema={LOGIN_SCHEMA}
          uiSchema={LOGIN_UI_SCHEMA}
          onSubmit={this.login.bind(this)}
          />
      </Panel>
    )
  }
}