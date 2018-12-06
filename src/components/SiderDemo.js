import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout >
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Welcome Page</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>Table Page</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            This is a Title
          </Header>
          <Content 
            style={{
                margin: '24px 16px', padding: 24, background: '#fff', minHeight: 750,
            }}
          >
          <p
                style={{
                    textAlign: "center",
                    marginTop: "15rem",
                    color: "#1890ff",
                    fontSize: "2rem"
                }}>
                Welcome to our new Web App
          </p>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;