import React from 'react';
import ReactDom from 'react-dom';
import WebPage from '@/Public/Layout/index';
import { Provider } from 'mobx-react'
import stores from './store/index'
import { HashRouter } from 'react-router-dom';

ReactDom.render(
  <Provider {...stores}>
    {/* 在整个输出组件外面套一层路由API 方便整个交易的路由跳转 */}
    <HashRouter>
      <WebPage style={{height:'100%'}} />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);