import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';

import React, { Component } from 'react';

import { Card, CardMedia } from '@rmwc/card';
import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';

import Form from "react-jsonschema-form"  ;

import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/typography/dist/mdc.typography.css';

import '../static/bootstrap.min.css';

const Register = {
  title: "Registration",
  type: "object",
  required: ["username", "password"],
  properties: {
    username: { type: "string", title: "Username" },
    password: { type: "string", title: "Password" },
    confirm_password: { type: "string", title: "Confirm Password" }
  }
};

const Login = {
  title: "Login",
  type: "object",
  required: ["username", "password"],
  properties: {
    username: { type: "string", title: "Username" },
    password: { type: "string", title: "Password" }
  }
};

const log = (type) => (data) => {
  console.log(type, data)
}


const app = feathers();

let fetch, restClient, init;
// Connect to the same as the browser URL (only in the browser)



class Index extends Component {
  constructor() {
    console.log('CONSTRUCTOR')
    super()
  }

  static async getInitialProps({ req }) {
    console.log('GETINITIAL')
    if (!init) {
      if (req) {
        restClient = rest('http://localhost:3030');
        fetch = require('node-fetch');
        // Configure an AJAX library (see below) with that client 
      } else {
        restClient = rest()
        fetch = window.fetch
      }
      app.configure(restClient.fetch(fetch));
      init = app.service('init');
    }



    const { state } = await init.get('state')
    console.log('CLIENT_GOT_STATE', state)

    return { state }
  }

  async register({formData}){
    if (!init) {
      restClient = rest()
      fetch = window.fetch
      app.configure(restClient.fetch(fetch));
      init = app.service('init');
    }
    console.log('call register')
    const users = app.service('users')
    console.log('USERS?',users)
    const result = await users.create(formData)
    console.log(result)
  }

  render() {
    return (
      <Grid>
        <GridCell
          align='middle'
          desktop='4'
          tablet='1'
          phone='0'
        />
        <GridCell
          align='middle'
          desktop='4'
          tablet='6'
          phone='4'
        >
          <Card>
            <CardMedia
              sixteenByNine
              style={{
                backgroundImage:
                  'url(/static/mandelbrot.jpg)'
              }}
            />
            <div style={{ padding: '0 1rem 1rem 1rem' }}>
              <Typography use="headline6" tag="h2">
                Mandelbrot
            </Typography>
              <Typography
                use="subtitle2"
                tag="h3"
                theme="textSecondaryOnBackground"
                style={{ marginTop: '-1rem' }}
              >

                <Form schema={this.props.state === 'init' ? Register : Login}
                  onChange={log("changed")}
                  onSubmit={this.register.bind(this)}
                  onError={log("errors")} />
              </Typography>
            </div>
          </Card>
        </GridCell>
        <GridCell
          align='middle'
          desktop='4'
          tablet='1'
          phone='0'
        />
      </Grid>
    )
  }
}
export default Index