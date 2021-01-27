import React, { Component } from 'react';
import { Card, Timeline } from 'antd';
// import { NotificationFilled } from '@ant-design/icons';
import Bell from '../../assets/icons/Bell.svg';
import Summary from '../../assets/icons/Summary.svg';

class AppSideBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="cardSettings">
          <Card className="innerCard" bordered={false}>
            <h3>
              <div className="iconBg">
                <img src={Summary} alt="bell" />
              </div>
              Division Summary
            </h3>
          </Card>
          <div className="__timeLine">
            <h3>
              <div className="iconBg">
                <img src={Bell} alt="bell" />
              </div>
              Module History
            </h3>
            <Timeline>
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
      </div>
    );
  }
}
export default AppSideBar;
