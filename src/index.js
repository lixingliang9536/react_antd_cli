import React from 'react';
import ReactDom from 'react-dom';
import Routers from '@/Public/Router/index';

ReactDom.render(
  // <AppContainer>
    <Routers />,
  // </AppContainer>,
  document.getElementById('root')
);