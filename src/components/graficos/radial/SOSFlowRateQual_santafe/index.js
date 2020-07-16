/* Importing util libraries .*/
import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';

/* Style from local folder .*/
import { Container } from './styles';


class RadialBar extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      nombre:'Testando o SetState',
      options: {
        chart: {
        height: 250,
        type: 'radialBar',
        toolbar: {
          show: false
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 360,
           hollow: {
            margin: 0,
            //tamanho do 'circulo'
            size: '65%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 5,
              left: 0,
              blur: 5,
              opacity: 0.12
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '1%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 7,
              opacity: 0.35
            }
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -55,
              show: true,
              color: '#888',
              /* Function that format the text inside the chart(Break lines) .*/
              formatter: function(val) {
                let texto = [`SOS Flow`, 'Rate Qual'];
                return texto;
              },
            },
            value: {
              /* Function that adds a '%' in the value of the chart .*/
              formatter: function(val) {
                return [parseFloat(val)];
              },
              color:'#888',
              show: true,
              offsetY: 10
            }
          }
        }
      },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.1,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
      },
      series: [0], // Value that goes to the radial chart .
    }
  }
  componentDidMount() {

    axios.get("/data-santafe").then(res => {
    
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
     
      let SOSFlowRateQual_array=[];
           
              var i =0;

          
            //array SOSFlowRateQual
            for (i=0; i < Dados_array.length; i++ ){
                SOSFlowRateQual_array[i] = Dados_array[i]['dados']['SOSFlowRateQual']
              } 
        
            //-----------------------------------------------__________--------------------------------------   
            
            let Data_array_1 = Data_array.map(a => a.data); 
      
    //---------------------------PEGANDO ÚLTIMO VALOR DA STRING--------------------------------------
    
    //armazenando valor da última posição na var k
    let k = SOSFlowRateQual_array.length;
   
    let SOSFlowRateQual_value = SOSFlowRateQual_array[k-1];

    //.tofixed determina o quanto de algarismos terá meu número 
    this.setState({
      series: [SOSFlowRateQual_value.toFixed(3)],
    });

      })
  }

  componentWillUnmount() {
    this.ws.close();
  }

  /* Rendering the component .*/
  render() {
    return (
      <Container>
        <div className="radialbar">
          <Grid container spacing={0.5} direction="row" justify="center" alignItems="center" id="graph_card">
            <Grid item xs={12}>
              <Chart id="graph" options={this.state.options} series={this.state.series} type="radialBar" height="280" />
            </Grid> 
          </Grid>
        </div>
      </Container>
    );
  }
}

export default RadialBar;
