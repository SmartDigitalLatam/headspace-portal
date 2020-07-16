/* Importing util libraries .*/
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

/* Importing charts ... */
import GVF_Disp_santafe from '../../../graficos/radial/GVF_Disp_santafe';
import SOS_Disp_santafe from '../../../graficos/radial/SOS_Disp_santafe';
import SOSFlowRateQual_santafe from '../../../graficos/radial/SOSFlowRateQual_santafe';

import { ContainerCss } from './styles';

export default function SimpleContainer(url) {
  //console.log(url.url);
  return (
    <ContainerCss>
        <React.Fragment>
        <Container style={{ backgroundColor: '#f3f3f3',width:'100%',borderRadius:'25px' }}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <GVF_Disp_santafe url={url.url}/>
            </Grid>
            <Grid item xs={4}>
              <SOS_Disp_santafe url={url.url}/>
            </Grid>
            <Grid item xs={4}>
              <SOSFlowRateQual_santafe url={url.url}/>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
          </Grid>
        </Container>
        </React.Fragment>
    </ContainerCss>
  );
}