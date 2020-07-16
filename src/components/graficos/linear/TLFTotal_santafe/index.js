import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';


class TLFTotal extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{}
        }
    }

    componentDidMount(){
        this.getChartData();
    }

    
    getChartData(){

      axios.get("https://headspace-back.azurewebsites.net/data-santafe").then(res => {
    
        //pegando valor do api - uri - localhost
        const value = res.data;
    
        //removendo o campo [result]
        let novo_array = value["result"];
    
    
        //splitando os dados em: Date and Data
        //-----------------------------------------------__________--------------------------------------   
    
        //array novo só com as datas
        let Data_array = [];
    
        novo_array.map(function(i){
          Data_array.push({
               "data": i.created,
            });
        })
    
        //array novo só com os dados
         let Dados_array= [];
         
         novo_array.map(function(i){
            Dados_array.push({
                 "dados": i.data,
              });
          })
    
         //array dos dados agora split por variável
        //-----------------------------------------------__________--------------------------------------   
      
        let TLFTotal_array=[];
     
          var i =0;

        //array TLFTotal
        for (i=0; i < Dados_array.length; i++ ){
            TLFTotal_array[i] = Dados_array[i]['dados']['TLFTotal']
          }  
    
        //-----------------------------------------------__________--------------------------------------   
        
        let Data_array_1 = Data_array.map(a => a.data);   

            this.setState({
                chartData:{
                    labels: Data_array_1,
                    datasets: [
                        {
                            label: "True Liquid Flow Total Santa Fé (L/min)",
                            data: TLFTotal_array,
                            lineTension: 0.1,
                            fill:false,
                            backgroundColor: 'rgba(216,216,216,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                        }
                    ]
                }
            });
        });
    }



    render(){
        return(
            <div className = "TLFTotal">
                
                <Line
                    data = {this.state.chartData}
                    width = {1200}
                    height = {400}
                    options={{
                        title:{
                            display: true,
                            text: 'True Liquid Flow Total Santa Fé (L/min)',
                            fontSize: 30
                        },
                        legend:{
                            display:false,
                            position: 'top',
                        },
                        scales:{
                            yAxes:[{
                                ticks: {
                                    beginAtZero: false,
                                }
                            }]
                        }
                    }}
                 />
                
            </div>
        )
    }
}

export default TLFTotal;