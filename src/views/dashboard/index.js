import React from 'react';
import { Grid, Button } from '@material-ui/core';
// import { Container } from './styles';

//Dados
import CardDataEcho4 from '../../components/dados/cardData_viewPrincipal/echo4';
import CardDataEcho3 from '../../components/dados/cardData_viewPrincipal/echo3';
import CardDataEcho2 from '../../components/dados/cardData_viewPrincipal/echo2';
import CardDataEcho1 from '../../components/dados/cardData_viewPrincipal/echo1';
import CardDataData from '../../components/dados/cardData_viewPrincipal/data';


export default function principal_menu(url) {
  return (
    <Grid container spacing ={0.5}>
      
      <Grid item xs={30}> 
        
        <div id='big_card'>  
          <Grid container spacing={6}>

          <Grid item xs={12}>
              <CardDataData url={url.data} />
            </Grid>
            
            <Grid item xs={12}>
              <CardDataEcho1 url={url.data} />
            </Grid>
            
            <Grid item xs={12}>
              <CardDataEcho2 url={url.data} />
            </Grid>
            
            <br/>
            <Grid item xs={12}>
              <CardDataEcho3 url={url.data}/>
            </Grid>
            <br/>

            <Grid item xs={12}>
              <CardDataEcho4 url={url.data} />
            </Grid>
            
          </Grid>
        </div>

      </Grid>
    </Grid>
  );
}
