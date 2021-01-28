import React, { Component } from 'react';
import { Timeline } from 'antd';
// import { NotificationFilled } from '@ant-design/icons';
import Bell from '../../assets/icons/Bell.svg';
import Summary from '../../assets/icons/Summary.svg';

class AppSideBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sideBarSettings">
        <div className="summaryCard bg_white">
          <div className="headerHolder">
            <div className="iconBg">
              <img src={Summary} alt="bell" />
            </div>
            <h3>Division Summary</h3>
          </div>
        </div>
        <div className="summaryCard __timeLine">
          <div className="headerHolder">
            <div className="iconBg">
              <img src={Bell} alt="bell" />
            </div>
            <h3>Module History</h3>
          </div>
          <Timeline className="timeLineCustom">
            <Timeline.Item>
              <h4>Create a services site</h4>
              <small>2015-09-01</small>
            </Timeline.Item>
            <Timeline.Item>
              <h4>Solve initial network problems</h4>
              <small>2015-09-01</small>
            </Timeline.Item>
            <Timeline.Item>
              <h4>Technical testing </h4>
              <small>2015-09-01</small>
            </Timeline.Item>
            <Timeline.Item>
              <h4>Network problems being solved </h4>
              <small>2015-09-01</small>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    );
  }
}
export default AppSideBar;
