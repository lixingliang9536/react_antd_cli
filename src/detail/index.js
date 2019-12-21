import React, {Component} from 'react';
import './index.less'
import small_pic from '../../images/small.jpg';
import {Button} from 'antd'
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react'

@inject('UserContent')
@observer
export default class Detail extends Component {
  constructor(){
    super()
  }

  @observable
  count = 0

  clickme = ()=>{
    // console.log(this.props)
    this.count++
    console.log(this.count)
  }

  render(){
    return (
      <div>
        <h1 className='title'>Hello World</h1>
        <h2>这是Detail组件</h2>
        <Button type="danger" onClick={this.clickme}>Click me {this.count}</Button>
        <a href='#/home'>回到 Home 组件</a>
        <h2>这是 UserContent 中的公共数据 {this.props.UserContent.uname}</h2>
        <h2>这是 UserContent 中的公共数据 {this.props.UserContent.upwd}</h2>
        <img src={small_pic} alt="" />
      </div>
    )
  }
}