/* Util libraries .*/
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

/* Importing chart's components .*/

import ClickIopressure1 from '../../graficos/linear/clickIo_pressure1';
import ClickIopressure2 from '../../graficos/linear/clickIo_pressure2';
import ClickIopressure3 from '../../graficos/linear/clickIo_pressure3';
import ClickIopressure4 from '../../graficos/linear/clickIo_pressure4';
import ClickIopump1speed from '../../graficos/linear/clickIo_pump1_speed';
import ClickIopump2speed from '../../graficos/linear/clickIo_pump2_speed';
import ClickIopump3speed from '../../graficos/linear/clickIo_pump3_speed';
import ClickIopump4speed from '../../graficos/linear/clickIo_pump4_speed';


export default class Linear_graph_grid_clickio extends Component {

  render() {
    return (
      <div>
        <Grid container spacing={1}>
      

        <Grid item xs={12}>
            <ClickIopressure1 data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <ClickIopressure2 data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <ClickIopressure3  data={this.props.url} />
          </Grid>

          <Grid item xs={12}>
            <ClickIopressure4  data={this.props.url}/>
          </Grid>
      
          <Grid item xs={12}>
            <ClickIopump1speed  data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <ClickIopump2speed  data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <ClickIopump3speed  data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <ClickIopump4speed  data={this.props.url}/>
          </Grid>

        </Grid>
      </div>
    );
  }
}
