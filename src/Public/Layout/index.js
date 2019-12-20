import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import PageHeader from './Header'
import PageSider from './SideMenu'
import PageContainer from './Container'
import './index.less'

const { Header, Content, Sider } = Layout;

export default class WebPage extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <Layout style={{background:'#f5f5f5',height:'100%'}}>
        <Header>
          <PageHeader />
        </Header>
        <Layout>
          <Sider width={200} style={{background:'#fff',height: '100vh',position: 'fixed', overflow: 'auto',}}>
            <PageSider />
          </Sider>
          <Content style={{background:'#fff', padding:20, margin:10,marginLeft:210}}>
            <PageContainer />
          </Content>
        </Layout>
      </Layout>
    )
  }
}