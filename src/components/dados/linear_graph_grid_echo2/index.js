/* Util libraries .*/
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

/* Importing chart's components .*/

import GwEcho2420mAchannel1 from '../../graficos/linear/gwEcho2_420mA_channel1';
import GwEcho2420mAchannel2 from '../../graficos/linear/gwEcho2_420mA_channel2';
import GwEcho2analoginput1 from '../../graficos/linear/gwEcho2_analog_input1';
import GwEcho2analoginput2 from '../../graficos/linear/gwEcho2_analog_input2';
import GwEcho2bandtemp from '../../graficos/linear/gwEcho2_band_temp';
import GwEcho2dispflowrate from '../../graficos/linear/gwEcho2_disp_flow_rate';
import GwEcho2flowcarry from '../../graficos/linear/gwEcho2_flow_carry';
import GwEcho2flowfraction from '../../graficos/linear/gwEcho2_flow_fraction';
import GwEcho2flowquality from '../../graficos/linear/gwEcho2_flow_quality';
import GwEcho2flowrate from '../../graficos/linear/gwEcho2_flow_rate';
import GwEcho2pressure from '../../graficos/linear/gwEcho2_pressure';
import GwEcho2sos from '../../graficos/linear/gwEcho2_sos';
import GwEcho2sosflowquality from '../../graficos/linear/gwEcho2_sos_flow_quality';
import GwEcho2sosquality from '../../graficos/linear/gwEcho2_sos_quality';
import GwEcho2systemstatus from '../../graficos/linear/gwEcho2_system_status';
import GwEcho2temp from '../../graficos/linear/gwEcho2_temp';
import GwEcho2tlf from '../../graficos/linear/gwEcho2_tlf';
import GwEcho2tlfcarry from '../../graficos/linear/gwEcho2_tlf_carry';
import GwEcho2tlffraction from '../../graficos/linear/gwEcho2_tlf_fraction';
import GwEcho2totalflow from '../../graficos/linear/gwEcho2_total_flow';
import GwEcho2totaltlf from '../../graficos/linear/gwEcho2_total_tlf';
import GwEcho2dispsos from '../../graficos/linear/gwEcho2_disp_sos';
import GwEcho2disptlf from '../../graficos/linear/gwEcho2_disp_tlf';
import GwEcho2gvf from '../../graficos/linear/gwEcho2_gvf';
import GwEcho2sosflowrate from '../../graficos/linear/gwEcho2_sos_flow_rate';

export default class linear_graph_grid_echo2 extends Component {

  render() {
    return (
      <div>
        <Grid container spacing={1}>
      

          <Grid item xs={12}>
            <GwEcho2420mAchannel1   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2420mAchannel2   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2analoginput1   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2analoginput2   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2bandtemp   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2dispflowrate   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2dispsos  data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2disptlf   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2flowcarry   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2flowfraction   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2flowquality   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2flowrate   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2gvf   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2pressure   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2sos   data={this.props.url}/>
          </Grid>
          <Grid item xs={12}>
            <GwEcho2sosflowquality   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2sosflowrate   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2sosquality   data={this.props.url}/>
          </Grid>
          <Grid item xs={12}>
            <GwEcho2systemstatus   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2temp   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2tlf   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2tlfcarry   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2tlffraction   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2totalflow   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho2totaltlf   data={this.props.url}/>
          </Grid>



        </Grid>
      </div>
    );
  }
}
