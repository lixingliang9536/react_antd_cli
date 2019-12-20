import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root';

import './index.less'

import small_pic from '../../images/small.jpg';
import bigger_pic from '../../images/bigger.jpg';

import {Button} from 'antd'

export default class Detail extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <h1 className='title'>Hello World</h1>
        <h2>这是Detail组件</h2>
        <Button type="danger">Click me</Button>
        <a href='#/home'>回到 Home 组件</a>
        {/* <img src={small_pic} alt="" />
        <img src={bigger_pic} alt="" /> */}
      </div>
    )
  }
}

// function Detail(){
//   return (
//     <div>
//       <h1 className='title'>Hello World</h1>
//       <h2>这是Detail组件</h2>
//       <Button type="danger">Click me</Button>
//       <a href='#/'>回到 Home 组件</a>
//       {/* <img src={small_pic} alt="" />
//       <img src={bigger_pic} alt="" /> */}
//     </div>
//   )
// }

// export default hot(Detail);