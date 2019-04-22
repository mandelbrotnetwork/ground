

import React, { Component, memo } from 'react';
import Router from 'next/router';

import { Card, CardMedia } from '@rmwc/card';
import { Grid, GridCell } from '@rmwc/grid';

import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/typography/dist/mdc.typography.css';
import '../static/bootstrap.min.css';

import getApp from '../utils/feathers.js';

class _Panel extends Component {
  async componentDidMount() {
    console.log('Mount')
    if (['/register', '/login'].indexOf(Router.route) !== -1) return

    const app = await getApp()
    const init = app.service('init')
    const { state } = await init.get('state')

    if (state === 'init') {
      console.log('state === "init", redirect to registration')
      Router.push('/register')
      return
    }

    const authentication = await app.authenticate().catch(e => {
      console.warn(e)
      return null
    })

    if (!authentication) {
      console.log('authentication failed, redirect to login')
      Router.push('/login')
      return
    }

    if (Router.route === '/') {
      Router.push('/home')
      return
    }
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
            <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
              {this.props.children}
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

const Panel = memo(_Panel)


export default Panel