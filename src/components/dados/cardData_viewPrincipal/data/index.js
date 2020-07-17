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
    

//-----------------------------------------------__________--------------------------------------        
           
            //array novo só com as datas (timestamp original em Unix/Epoch Time)
            let data_array= [];
    
            novo_array.map(function(i){
                data_array.push({
                        "data": i.time,
                    })
                    return data_array;
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

           //manipulando o array de data
            let data_array_2 = [];
    
             j =0;
    
            for (i=0; i<data_array.length;i++){
                if (property_array_1[i]==="telemetry"){
                        data_array_2[j]=data_array[i]["data"];
                        j = j+1;
                } else {
                }
            }
     //-----------------------------------------------__________--------------------------------------        
 
            //convertendo EPOCH time in Brazil UTC time
            var utc_data_array = [];
            var utc_data_array_1 = [];
            var data_array_3 = [];
    
            for (i=0; i<data_array_2.length;i++){
                data_array_3[i]= data_array_2[i]*1000;
                utc_data_array_1[i] = new Date(data_array_3[i]);
                utc_data_array[i] = utc_data_array_1[i].toLocaleString();
            }
        
            //Dados limpos e finalizados
            //-----------------------------------------------__________--------------------------------------        
        
      
    //---------------------------PEGANDO ÚLTIMO VALOR DA STRING--------------------------------------
    
    //armazenando valor da última posição na var k
    let k = utc_data_array.length;
   
    //.tofixed determina o quanto de algarismos decimais terá meu número 
    this.setState({
      data:[utc_data_array[k-1]],
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
                            <p>DATA DOS VALORES DO DASHBOARD</p>
                        </div>
                        <Grid container spacing={2} direction="row" justify="center" alignItems="center" style={me.state.style.custom_card}>
                            

                            <Grid style={me.state.style.custom_center_item} item xs={12} sm={4}>
                                <Typography id='card_content'component="h2">
                                {me.state.data}
                                </Typography>
                                <Typography  >
                                  
                                </Typography>
                                <Typography id='card_desc' variant="body2" component="p" color="textSecondary">
                                    <a href=" "style={me.state.style.custom_button}></a>
                                </Typography>
                            </Grid>


                        </Grid>
                    </div>
                </Container>
            </div>
        );
    }
}
