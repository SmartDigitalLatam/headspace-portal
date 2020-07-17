/* Util libraries .*/
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

/* Importing chart's components .*/

import GwEcho4420mAchannel1 from '../../graficos/linear/gwEcho4_420mA_channel1';
import GwEcho4420mAchannel2 from '../../graficos/linear/gwEcho4_420mA_channel2';
import GwEcho4analoginput1 from '../../graficos/linear/gwEcho4_analog_input1';
import GwEcho4analoginput2 from '../../graficos/linear/gwEcho4_analog_input2';
import GwEcho4bandtemp from '../../graficos/linear/gwEcho4_band_temp';
import GwEcho4dispflowrate from '../../graficos/linear/gwEcho4_disp_flow_rate';
import GwEcho4dispsos from '../../graficos/linear/gwEcho4_disp_sos';
import GwEcho4disptlf from '../../graficos/linear/gwEcho4_disp_tlf';
import GwEcho4flowcarry from '../../graficos/linear/gwEcho4_flow_carry';
import GwEcho4flowfraction from '../../graficos/linear/gwEcho4_flow_fraction';
import GwEcho4flowquality from '../../graficos/linear/gwEcho4_flow_quality';
import GwEcho4flowrate from '../../graficos/linear/gwEcho4_flow_rate';
import GwEcho4gvf from '../../graficos/linear/gwEcho4_gvf';
import GwEcho4pressure from '../../graficos/linear/gwEcho4_pressure';
import GwEcho4sos from '../../graficos/linear/gwEcho4_sos';
import GwEcho4sosflowquality from '../../graficos/linear/gwEcho4_sos_flow_quality';
import GwEcho4sosflowrate from '../../graficos/linear/gwEcho4_sos_flow_rate';
import GwEcho4sosquality from '../../graficos/linear/gwEcho4_sos_quality';
import GwEcho4systemstatus from '../../graficos/linear/gwEcho4_system_status';
import GwEcho4temp from '../../graficos/linear/gwEcho4_temp';
import GwEcho4tlf from '../../graficos/linear/gwEcho4_tlf';
import GwEcho4tlfcarry from '../../graficos/linear/gwEcho4_tlf_carry';
import GwEcho4tlffraction from '../../graficos/linear/gwEcho4_tlf_fraction';
import GwEcho4totalflow from '../../graficos/linear/gwEcho4_total_flow';
import GwEcho4totaltlf from '../../graficos/linear/gwEcho4_total_tlf';



export default class Linear_graph_grid_echo4 extends Component {

  render() {
    return (
      <div>
        <Grid container spacing={1}>
      

        <Grid item xs={12}>
            <GwEcho4420mAchannel1    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4420mAchannel2    data={this.props.url}/>
          </Grid>
          
          <Grid item xs={12}>
            <GwEcho4analoginput1    data={this.props.url}/>
          </Grid>
          
          <Grid item xs={12}>
            <GwEcho4analoginput2    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4bandtemp    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4dispflowrate    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4dispsos    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4disptlf    data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4flowcarry     data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4flowfraction     data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4flowquality     data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4flowrate     data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4gvf     data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4pressure     data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4sos     data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4sosflowquality     data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4sosflowrate     data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4sosquality      data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4systemstatus      data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4temp      data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4tlf      data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4tlfcarry      data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4tlffraction      data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4totalflow      data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho4totaltlf      data={this.props.url}/>
          </Grid>


        </Grid>
      </div>
    );
  }
}
