import React, { Component } from 'react'
import { Layout, Divider } from 'antd'
import Routers from '@/Public/Router/index'
import './index.less'

const { Content } = Layout

export default class PageContainer extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <h3 className='contentTitle'>后台管理系统</h3>
        <div>
          <Routers />
        </div>
      </div>
    )
  }
}