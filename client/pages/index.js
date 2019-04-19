import feathers from '@feathersjs/feathers'

import React, { Component } from 'react';
import { Card, CardMedia } from '@rmwc/card';
import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';

import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/typography/dist/mdc.typography.css';


class Index extends Component {
  constructor() {
    super()
  }

  static async getInitialProps(){
    return {}
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
                {this.props.page}
              </Typography>
              <Typography
                use="body1"
                tag="div"
                theme="textSecondaryOnBackground"
              >
                Visit ten places on our planet that are undergoing the biggest
                changes today.
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