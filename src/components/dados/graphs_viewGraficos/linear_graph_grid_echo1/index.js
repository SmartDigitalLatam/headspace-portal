/* Util libraries .*/
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

/* Importing chart's components .*/

import GwEcho1420mAchannel1 from '../../../graficos/linear/gwEcho1_420mA_channel1';
import GwEcho1420mAchannel2 from '../../../graficos/linear/gwEcho1_420mA_channel2';
import GwEcho1analoginput1 from '../../../graficos/linear/gwEcho1_analog_input1';
import GwEcho1analoginput2 from '../../../graficos/linear/gwEcho1_analog_input2';
import GwEcho1bandtemp from '../../../graficos/linear/gwEcho1_band_temp';
import GwEcho1dispflowrate from '../../../graficos/linear/gwEcho1_disp_flow_rate';
import GwEcho1dispsos from '../../../graficos/linear/gwEcho1_disp_sos';
import GwEcho1disptlf from '../../../graficos/linear/gwEcho1_disp_tlf';
import GwEcho1flowcarry from '../../../graficos/linear/gwEcho1_flow_carry';
import GwEcho1flowfraction from '../../../graficos/linear/gwEcho1_flow_fraction';
import GwEcho1flowquality from '../../../graficos/linear/gwEcho1_flow_quality';
import GwEcho1flowrate from '../../../graficos/linear/gwEcho1_flow_rate';
import GwEcho1gvf from '../../../graficos/linear/gwEcho1_gvf';
import GwEcho1pressure from '../../../graficos/linear/gwEcho1_pressure';
import GwEcho1sos from '../../../graficos/linear/gwEcho1_sos';
import GwEcho1sosflowquality from '../../../graficos/linear/gwEcho1_sos_flow_quality';
import GwEcho1sosflowrate from '../../../graficos/linear/gwEcho1_sos_flow_rate';
import GwEcho1sosquality from '../../../graficos/linear/gwEcho1_sos_quality';
import GwEcho1systemstatus from '../../../graficos/linear/gwEcho1_system_status';
import GwEcho1temp from '../../../graficos/linear/gwEcho1_temp';
import GwEcho1tlf from '../../../graficos/linear/gwEcho1_tlf';
import GwEcho1tlfcarry from '../../../graficos/linear/gwEcho1_tlf_carry';
import GwEcho1tlffraction from '../../../graficos/linear/gwEcho1_tlf_fraction';
import GwEcho1totalflow from '../../../graficos/linear/gwEcho1_total_flow';
import GwEcho1totaltlf from '../../../graficos/linear/gwEcho1_total_tlf';


export default class Linear_graph_grid extends Component {

  render() {
    return (
      <div>
        <Grid container spacing={1}>

          <Grid item xs={12}>
            <GwEcho1420mAchannel1  data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1420mAchannel2  data={this.props.url}/>
          </Grid>
      
          <Grid item xs={12}>
            <GwEcho1analoginput1  data={this.props.url}/>
          </Grid>
      
          <Grid item xs={12}>
            <GwEcho1analoginput2  data={this.props.url}/>
          </Grid>
      
          <Grid item xs={12}>
            <GwEcho1bandtemp  data={this.props.url}/>
          </Grid> 
      
          <Grid item xs={12}>
            <GwEcho1dispflowrate  data={this.props.url}/>
          </Grid>
      
          <Grid item xs={12}>
            <GwEcho1dispsos  data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1disptlf   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1flowcarry   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1flowfraction   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1flowquality   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1flowrate   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1gvf   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1pressure   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1sos   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1sosflowquality   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1sosflowrate   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1sosquality   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1systemstatus   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1temp   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1tlf   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1tlfcarry   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1tlffraction   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1totalflow   data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <GwEcho1totaltlf   data={this.props.url}/>
          </Grid>


        </Grid>
      </div>
    );
  }
}
