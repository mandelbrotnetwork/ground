

import React, { memo } from 'react';

import Panel from '../components/Panel.js';
import { LinearProgress } from '@rmwc/linear-progress';
import '@material/linear-progress/dist/mdc.linear-progress.css';


const Index = memo(
  () => (
    <Panel>
      <LinearProgress size={72} />
    </Panel>
  )
)

export default Index