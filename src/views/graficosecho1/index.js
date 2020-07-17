import React from 'react';
import Linear_graph_grid_echo1 from '../../components/dados/graphs_viewGraficos/linear_graph_grid_echo1';
// import AddItemPopup  from '../../components/Button/Button';
// import { Container } from './styles';

export default function config(url) {
  return (
    <> 
      <Linear_graph_grid_echo1 url={url.data}/>    
    </>
    
  );
}
