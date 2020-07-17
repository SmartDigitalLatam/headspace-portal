import React from 'react';
import Linear_graph_grid_clickio from '../../components/dados/linear_graph_grid_clickio';
// import AddItemPopup  from '../../components/Button/Button';
// import { Container } from './styles';

export default function config(url) {
  return (
    <> 
      <Linear_graph_grid_clickio url={url.data}/>    
    </>
    
  );
}
