import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'

const { Sider  } = Layout
const { SubMenu } = Menu;

const menuArr=[
  { group:'1', icon:'user', title:'侧边栏--01', item:['option1','option2','option3','option4'] },
  { group:'2', icon:'laptop', title:'侧边栏--02', item:['option1','option2','option3','option4'] },
  { group:'3', icon:'notification', title:'侧边栏--03', item:['option1','option2','option3'] },
  { group:'5', icon:'user', title:'侧边栏--04', item:['option1','option2','option3','option4'] },
  { group:'6', icon:'user', title:'侧边栏--05', item:['option1','option2','option3','option4'] },
  { group:'7', icon:'user', title:'侧边栏--06', item:['option1','option2','option3','option4'] },
]

let idx = 0

export default class PageSider extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {
          menuArr.map((obj)=>{
            return (
              <SubMenu
                key={obj.group}
                title={
                  <span>
                    <Icon type={obj.icon} />
                    {obj.title}
                  </span>
                }
              >
                {
                  obj.item.map((itemobj)=>{
                    idx++
                    return (
                      <Menu.Item key={idx}>{itemobj}</Menu.Item>
                    )
                  })
                }
              </SubMenu>
            )
          })
        }
      </Menu>
    )
  }
}