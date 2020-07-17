import React from 'react';
import Linear_gaph_grid_echo3 from '../../components/dados/linear_graph_grid_echo3';
// import AddItemPopup  from '../../components/Button/Button';
// import { Container } from './styles';

export default function config(url) {
  return (
    <> 
      <Linear_gaph_grid_echo3 url={url.data}/>    
    </>
    
  );
}
