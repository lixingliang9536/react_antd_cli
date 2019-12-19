import React from 'react';
import {hot} from 'react-hot-loader/root';

import './index.less'

import small_pic from '../../images/small.jpg';
import bigger_pic from '../../images/bigger.jpg';

import {Button} from 'antd'

function Detail(){
  return (
    <div>
      <h1 className='title'>Hello World</h1>
      <Button type="danger">Click me</Button>
      <img src={small_pic} alt="" />
      <img src={bigger_pic} alt="" />
    </div>
  )
}

export default hot(Detail);