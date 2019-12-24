import React, {Component, Fragment} from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from '@/Home/index';
import Detail from '@/Detail/index';
import './index.less'

export default class Routers extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Detail" name='detail' component={Detail} />
        {/* <Route exact path="" render={()=><Redirect to='/Home'></Redirect>}></Route> */}
      </Switch>
    )
  }
}