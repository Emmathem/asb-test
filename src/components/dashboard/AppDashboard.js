import React, { Component } from 'react';
import { Row, Col, Layout, Menu, Breadcrumb } from 'antd';
import AppTableData from './AppTableData';
import AppSideBar from './AppSideBar';
import AppCardRow from './AppCardRow';
import Division from '../../assets/icons/Division.svg';
import Home from '../../assets/icons/Home.svg';
import Entry from '../../assets/icons/Entries.svg';

const { Header, Content } = Layout;

class AppDashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            {/*<div className="logo">FE Engineer Test 1</div>*/}
            <Menu mode="horizontal" defaultSelectedKeys={['3']}>
              <Menu.Item key="1">
                <img src={Home} alt="h" />
                Home
              </Menu.Item>
              <Menu.Item key="2">
                <img src={Entry} alt="o" />
                Entries
              </Menu.Item>
              <Menu.Item key="3" className="activeMenu">
                <img src={Division} alt="o" />
                Divisions
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 20px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              <AppCardRow />
              <Row gutter={[8, 8]}>
                <Col span={5}>
                  <AppSideBar />
                </Col>
                <Col span={19}>
                  <AppTableData />
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default AppDashboard;
