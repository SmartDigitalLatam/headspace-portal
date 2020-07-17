/* Importing util libraries .*/
import React, { Component,useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

import { Container } from './styles';

export default class concentrado extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            //Numbers to start the application  
            style:{
                custom_card:{
                    color:'white',
                    minWidth: 12,
                    borderRadius:'25px',
                    // cor do fundo do elemento
                    backgroundColor:'#009065',
                    border:'none',
                    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19);'
                },
                custom_title:{
                    fontSize: 14,
                    color:'white',
                    borderRadius:'25px',
                },
                custom_root:{
                    flexGrow: 1,
                },
                custom_center_item:{
                    textAlign:"center",
                    width:'18%',
                },
                custom_button:{
                    fontSize:'14px',
                    fontWeight:'bold'
                }
            }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3000/headspace_dev1").then(res => {
    
            //pegando valor do api - uri - localhost
            const value = res.data;

            //adentrando o campo [result]
            let novo_array = value["result"];
    
            //splitando os dados em: Data, Dados e Property
            //-----------------------------------------------__________--------------------------------------   
    
            let i = 0;
            let j = 0;
    
           
            //array novo só com os dados 

             //gwEcho4_gvf
            let gwEcho4_gvf_array = [];

       novo_array.map(function(i){
        gwEcho4_gvf_array.push({
                "gwEcho4_gvf": i.gwEcho4_gvf,
            })
            return gwEcho4_gvf_array;
        })
    
        //gwEcho4_sos
        let gwEcho4_sos_array = [];

        novo_array.map(function(i){
         gwEcho4_sos_array.push({
                 "gwEcho4_sos": i.gwEcho4_sos,
             })
             return gwEcho4_sos_array;
         })

         //gwEcho4_sos_quality
         let gwEcho4_sos_quality_array = [];

         novo_array.map(function(i){
          gwEcho4_sos_quality_array.push({
                  "gwEcho4_sos_quality": i.gwEcho4_sos_quality,
              })
              return gwEcho4_sos_quality_array;
          })

          let gwEcho4_flow_rate_array = [];

          novo_array.map(function(i){
           gwEcho4_flow_rate_array.push({
                   "gwEcho4_flow_rate": i.gwEcho4_flow_rate,
               })
               return gwEcho4_flow_rate_array;
           })
   


    //-----------------------------------------------__________--------------------------------------        

             //array novo para selecionar property  
             let property_array = [];
    
            novo_array.map(function(i){
                property_array.push({
                        "property": i.Properties,
                    })
                    return property_array;
                })
      //-----------------------------------------------__________--------------------------------------        

            //manipulando o array de property
            let property_array_1= [];
            
            for (i=0; i<property_array.length;i++){
                property_array_1[i]=property_array[i]["property"]["topic"];
           }
    
     //-----------------------------------------------__________--------------------------------------        

           //manipulando o array de dados
           let gwEcho4_gvf_array_1 = gwEcho4_gvf_array.map(a => a.gwEcho4_gvf);  
        let gwEcho4_gvf_array_2=[];

        j =0;

        for (i=0; i<gwEcho4_gvf_array_1.length;i++){
            if (property_array_1[i]==="telemetry"){
                gwEcho4_gvf_array_2[j]=gwEcho4_gvf_array_1[i];
                    j = j+1;
            } else {
            }
        }

        let gwEcho4_sos_array_1 = gwEcho4_sos_array.map(a => a.gwEcho4_sos);  
        let gwEcho4_sos_array_2=[];

        j =0;

        for (i=0; i<gwEcho4_sos_array_1.length;i++){
            if (property_array_1[i]==="telemetry"){
                gwEcho4_sos_array_2[j]=gwEcho4_sos_array_1[i];
                    j = j+1;
            } else {
            }
        }

        let gwEcho4_sos_quality_array_1 = gwEcho4_sos_quality_array.map(a => a.gwEcho4_sos_quality);  
        let gwEcho4_sos_quality_array_2=[];

        j =0;

        for (i=0; i<gwEcho4_sos_quality_array_1.length;i++){
            if (property_array_1[i]==="telemetry"){
                gwEcho4_sos_quality_array_2[j]=gwEcho4_sos_quality_array_1[i];
                    j = j+1;
            } else {
            }
        }

        let gwEcho4_flow_rate_array_1 = gwEcho4_flow_rate_array.map(a => a.gwEcho4_flow_rate);  
        let gwEcho4_flow_rate_array_2=[];

        j =0;

        for (i=0; i<gwEcho4_flow_rate_array_1.length;i++){
            if (property_array_1[i]==="telemetry"){
                gwEcho4_flow_rate_array_2[j]=gwEcho4_flow_rate_array_1[i];
                    j = j+1;
            } else {
            }
        }

            //Dados limpos e finalizados
            //-----------------------------------------------__________--------------------------------------        
        
      
    //---------------------------PEGANDO ÚLTIMO VALOR DA STRING--------------------------------------
    
    //armazenando valor da última posição na var k
    let k = gwEcho4_gvf_array_2.length;
   
    let gwEcho4_gvf_value = gwEcho4_gvf_array_2[k-1];
    let gwEcho4_sos_value = gwEcho4_sos_array_2[k-1];
    let gwEcho4_sos_quality_value = gwEcho4_sos_quality_array_2[k-1];
    let gwEcho4_flow_rate_value = gwEcho4_flow_rate_array_2[k-1];

    //.tofixed determina o quanto de algarismos decimais terá meu número 
    this.setState({
      series1: [gwEcho4_gvf_value.toFixed(2)],
      series2: [gwEcho4_sos_value.toFixed(2)],
      series3: [gwEcho4_sos_quality_value.toFixed(2)],
      series4: [gwEcho4_flow_rate_value.toFixed(2)],
    });

      })
    }
    
    componentWillUnmount() {
        this.setState.close();
      }

    render() {
        var me = this;
        return (
            <div>
                <Container>
                    <div style={me.state.style.custom_root}>
                        <div id="card_title">
                            <p>ECHOWISE 4</p>
                        </div>
                        <Grid container spacing={2} direction="row" justify="center" alignItems="center" style={me.state.style.custom_card}>
                            

                            <Grid style={me.state.style.custom_center_item} item xs={12} sm={2}>
                                <Typography id='card_content'component="h2">
                                {me.state.series1}
                                </Typography>
                                <Typography  >
                        
                                </Typography>
                                <Typography id='card_desc' variant="body2" component="p" color="textSecondary">
                                    <a href=" "style={me.state.style.custom_button}>gwEcho4_gvf</a>
                                </Typography>
                            </Grid>

                            <Grid style={me.state.style.custom_center_item} item xs={12} sm={2}>
                                <Typography id='card_content'component="h2">
                                {me.state.series2}
                                </Typography>
                                <Typography  >
                        
                                </Typography>
                                <Typography id='card_desc' variant="body2" component="p" color="textSecondary">
                                    <a href=" "style={me.state.style.custom_button}>gwEcho4_sos</a>
                                </Typography>
                            </Grid>

                            <Grid style={me.state.style.custom_center_item} item xs={12} sm={2}>
                                <Typography id='card_content'component="h2">
                                {me.state.series3}
                                </Typography>
                                <Typography  >
                        
                                </Typography>
                                <Typography id='card_desc' variant="body2" component="p" color="textSecondary">
                                    <a href=" "style={me.state.style.custom_button}>gwEcho4_sos_quality</a>
                                </Typography>
                            </Grid>

                            <Grid style={me.state.style.custom_center_item} item xs={12} sm={2}>
                                <Typography id='card_content'component="h2">
                                {me.state.series4}
                                </Typography>
                                <Typography  >
                        
                                </Typography>
                                <Typography id='card_desc' variant="body2" component="p" color="textSecondary">
                                    <a href=" "style={me.state.style.custom_button}>gwEcho4_flow_rate</a>
                                </Typography>
                            </Grid>


                        </Grid>
                    </div>
                </Container>
            </div>
        );
    }
}
