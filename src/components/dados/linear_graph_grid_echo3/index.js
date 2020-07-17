/* Util libraries .*/
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

/* Importing chart's components .*/

import GwEcho3420mAchannel1 from '../../graficos/linear/gwEcho3_420mA_channel1';
import GwEcho3420mAchannel2 from '../../graficos/linear/gwEcho3_420mA_channel2';
import GwEcho3analoginput1 from '../../graficos/linear/gwEcho3_analog_input1';
import GwEcho3analoginput2 from '../../graficos/linear/gwEcho3_analog_input2';
import GwEcho3bandtemp from '../../graficos/linear/gwEcho3_band_temp';
import GwEcho3dispflowrate from '../../graficos/linear/gwEcho3_disp_flow_rate';
import GwEcho3dispsos from '../../graficos/linear/gwEcho3_disp_sos';
import GwEcho3disptlf from '../../graficos/linear/gwEcho3_disp_tlf';
import GwEcho3flowcarry from '../../graficos/linear/gwEcho3_flow_carry';
import GwEcho3flowfraction from '../../graficos/linear/gwEcho3_flow_fraction';
import GwEcho3flowquality from '../../graficos/linear/gwEcho3_flow_quality';
import GwEcho3flowrate from '../../graficos/linear/gwEcho3_flow_rate';
import GwEcho3gvf from '../../graficos/linear/gwEcho3_gvf';
import GwEcho3pressure from '../../graficos/linear/gwEcho3_pressure';
import GwEcho3sos from '../../graficos/linear/gwEcho3_sos';
import GwEcho3sosflowquality from '../../graficos/linear/gwEcho3_sos_flow_quality';
import GwEcho3sosflowrate from '../../graficos/linear/gwEcho3_sos_flow_rate';
import GwEcho3sosquality from '../../graficos/linear/gwEcho3_sos_quality';
import GwEcho3systemstatus from '../../graficos/linear/gwEcho3_system_status';
import GwEcho3temp from '../../graficos/linear/gwEcho3_temp';
import GwEcho3tlf from '../../graficos/linear/gwEcho3_tlf';
import GwEcho3tlfcarry from '../../graficos/linear/gwEcho3_tlf_carry';
import GwEcho3tlffraction from '../../graficos/linear/gwEcho3_tlf_fraction';
import GwEcho3totaltlf from '../../graficos/linear/gwEcho3_total_tlf';



export default class linear_graph_grid_echo3 extends Component {

  render() {
    return (
      <div>
        <Grid container spacing={1}>
      

        <Grid item xs={12}>
            <GwEcho3420mAchannel1   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3420mAchannel2    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3analoginput1    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3analoginput2    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3bandtemp    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3dispflowrate    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3dispsos    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3disptlf    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3flowcarry    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3flowfraction    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3flowquality    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3flowrate    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3gvf    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3pressure    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3sos    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3sosflowquality    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3sosflowrate    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3sosquality    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3systemstatus    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3temp    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3tlf    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3tlfcarry    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3tlffraction    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho3totaltlf    data={this.props.url}/>
          </Grid>


        </Grid>
      </div>
    );
  }
}
