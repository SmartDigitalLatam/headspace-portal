import React from 'react';
import Linear_graph_grid_echo4 from '../../components/dados/linear_graph_grid_echo4';
// import AddItemPopup  from '../../components/Button/Button';
// import { Container } from './styles';

export default function config(url) {
  return (
    <> 
      <Linear_graph_grid_echo4 url={url.data}/>    
    </>
    
  );
}
