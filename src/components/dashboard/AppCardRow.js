import React, { Component } from 'react';
import { Card } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

class AppCardRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cardSettings">
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <Card bordered={false} className="innerCard">
              <h2>
                3455 <InfoCircleOutlined />
              </h2>
              <h4>Ongoing Metric</h4>
            </Card>
          </div>
          <div className="col-xl-3 col-md-6">
            <Card bordered={false} className="innerCard">
              <h2>
                3455 <InfoCircleOutlined />
              </h2>
              <h4>Past Metric</h4>
            </Card>
          </div>
          <div className="col-xl-3 col-md-6">
            <Card bordered={false} className="innerCard">
              <h2>
                3455 <InfoCircleOutlined />
              </h2>
              <h4>Missed Metric</h4>
            </Card>
          </div>
          <div className="col-xl-3 col-md-6">
            <Card bordered={false} className="innerCard">
              <h2>
                3455 <InfoCircleOutlined />
              </h2>
              <h4>Failed Metric</h4>
            </Card>
          </div>
          <div className="col-xl-3 col-md-6">
            <Card bordered={false} className="innerCard">
              <h2>
                3455 <InfoCircleOutlined />
              </h2>
              <h4>Pending Metric</h4>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default AppCardRow;
