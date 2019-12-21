import React from 'react';
import ReactDom from 'react-dom';
import WebPage from '@/Public/Layout/index';
import { Provider } from 'mobx-react'
import stores from './store/index'

ReactDom.render(
  <Provider {...stores}>
    <WebPage style={{height:'100%'}} />
  </Provider>,
  document.getElementById('root')
);