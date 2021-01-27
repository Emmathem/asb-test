import React, { Component } from 'react';
import { Row, Col, Layout, Menu, Breadcrumb } from 'antd';
import AppTableData from './AppTableData';
import AppSideBar from './AppSideBar';
import AppCardRow from './AppCardRow';

const { Header, Content, Footer } = Layout;

class AppDashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Entries</Menu.Item>
              <Menu.Item key="3">Divisons</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              <AppCardRow />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <AppSideBar />
                </Col>
                <Col span={18}>
                  <AppTableData />
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default AppDashboard;
