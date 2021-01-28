import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import AppTableData from './AppTableData';
import AppSideBar from './AppSideBar';
import AppCardRow from './AppCardRow';
// import Division from '../../assets/icons/Division.svg';
// import Home from '../../assets/icons/Home.svg';
// import Entry from '../../assets/icons/Entries.svg';
// import Logo from '../../assets/icons/LogoIcon.svg';

const { Header, Content } = Layout;

class AppDashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="layout">
          <Header>
            <nav className="navbar" role="navigation">
              <div className="container">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand">Yoruba Culture</a>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                    {/*<li><a className="navlink scroll-to" href="<?= LINK_PREFIX .'about-us/'; ?>">About Us</a></li>
                    <li><a href="<?= LINK_PREFIX .'#curr_pro';?>">Current Production</a></li>
                    <li><a href="<?= LINK_PREFIX .'#contact'; ?>">Contact us</a></li>
                    <li><a href="<?=LINK_PREFIX .'#schedule'; ?>">Download</a></li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Media <b className="caret"></b></a>
                      <ul className="dropdown-menu animated fadeInTop">
                        <li><a href="<?= LINK_PREFIX .'picture-gallery/' ?>">Images</a></li>
                        <li><a href="<?= LINK_PREFIX .'videos-gallery/' ?>">Video</a></li>
                      </ul>
                    </li>*/}
                  </ul>
                </div>
              </div>
            </nav>
            {/*<div className="logo">*/}
            {/*  <img src={Logo} alt="L" /> FE Engineer Test 1*/}
            {/*</div>*/}
            {/*<Menu mode="horizontal" defaultSelectedKeys={['3']}>*/}
            {/*  <Menu.Item key="1">*/}
            {/*    <img src={Home} alt="h" />*/}
            {/*    Home*/}
            {/*  </Menu.Item>*/}
            {/*  <Menu.Item key="2">*/}
            {/*    <img src={Entry} alt="o" />*/}
            {/*    Entries*/}
            {/*  </Menu.Item>*/}
            {/*  <Menu.Item key="3" className="activeMenu">*/}
            {/*    <img src={Division} alt="o" />*/}
            {/*    Divisions*/}
            {/*  </Menu.Item>*/}
            {/*</Menu>*/}
          </Header>
          <Content style={{ padding: '0 20px' }}>
            <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Division</Breadcrumb.Item>
              <Breadcrumb.Item>Module</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              <AppCardRow />
              <div className="row">
                <div className="col-md-3">
                  <AppSideBar />
                </div>
                <div className="col-md-9">
                  <AppTableData />
                </div>
              </div>
              {/*<Row gutter={[8, 8]}>
                <Col span={5}>
                  <AppSideBar />
                </Col>
                <Col span={19}>
                  <AppTableData />
                </Col>
              </Row>*/}
            </div>
          </Content>
        </div>
      </div>
    );
  }
}
export default AppDashboard;
