import React, {Component, Fragment} from 'react';
import {HashRouter, Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import Home from '@/Home/index';
import Detail from '@/Detail/index';
// import Home from '../../Home/index';
// import Detail from '../../Detail/index';

export default class Routers extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Detail" component={Detail} />
          {/* <Route exact path="" render={()=><Redirect to='/Home'></Redirect>}></Route> */}
        </Switch>
      </HashRouter>
    )
  }
}