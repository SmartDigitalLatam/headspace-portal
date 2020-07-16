/* Util libraries .*/
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

/* Importing chart's components .*/
import FlowRate_Disp from '../../../graficos/linear/FlowRate_Disp_santafe';
import TotalFlow from '../../../graficos/linear/TotalFlow_santafe';
import VFQuality from '../../../graficos/linear/VFQuality_santafe';
import Temp from '../../../graficos/linear/Temp_santafe';
import SOS from '../../../graficos/linear/SOS_santafe';
import TLF_Disp from '../../../graficos/linear/TLF_Disp_santafe';
import TLFTotal from '../../../graficos/linear/TLFTotal_santafe';
import BandTemp from '../../../graficos/linear/BandTemp_santafe';
import SOSFlowRate_Disp from '../../../graficos/linear/SOSFlowRate_Disp_santafe';
import FlowRate from '../../../graficos/linear/FlowRate_santafe';
import SOSFlowRateQual from '../../../graficos/linear/SOSFlowRateQual_santafe';
import SOS_Disp from '../../../graficos/linear/SOS_Disp_santafe';
import Pressure from '../../../graficos/linear/Pressure_santafe';
import GVF_Disp from '../../../graficos/linear/GVF_Disp_santafe';
import TLF from '../../../graficos/linear/TLF_santafe';

export default class linear_graph_grid extends Component {

  render() {
    return (
      <div>
        <Grid container spacing={1}>
      
          <Grid item xs={12}>
            <GVF_Disp data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <Pressure data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <FlowRate_Disp data={this.props.url} />
          </Grid>

          <Grid item xs={12}>
            <FlowRate data={this.props.url}/>
          </Grid>
      
          <Grid item xs={12}>
            <TotalFlow data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <VFQuality data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <SOS data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <SOS_Disp data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <SOSFlowRate_Disp data={this.props.url}/>
          </Grid>

          <Grid item xs={12}>
            <SOSFlowRateQual data={this.props.url}/>
          </Grid>
      
          <Grid item xs={12}>
            <Temp data={this.props.url}/>
          </Grid>
      
          <Grid item xs={12}>
            <BandTemp data={this.props.url}/>
          </Grid>
      
          <Grid item xs={12}>
            <TLF_Disp data={this.props.url}/>
          </Grid> 
      
          <Grid item xs={12}>
            <TLF data={this.props.url}/>
          </Grid>
      
          <Grid item xs={12}>
            <TLFTotal data={this.props.url}/>
          </Grid>
  
      
        </Grid>
      </div>
    );
  }
}
