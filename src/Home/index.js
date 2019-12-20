import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {Button} from 'antd'

import './index.less'

export default class Home extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <div className='text'>hello react</div>
        <div className='text'>这是Home组件</div>
        <a href='#/detail'>去 Detail 组件</a>
        <Button onClick={() => this.props.history.push('detail')}>通过函数跳转到 Detail 组件</Button>
      </div>
    )
  }
}

// export default hot(Home);