import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

class AppCardRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cardSettings">
        <Row gutter={[8, 8]}>
          <Col span={5}>
            <Card bordered={false} className="innerCard">
              <h2>
                3455 <InfoCircleOutlined />
              </h2>
              <h4>Ongoing Metric</h4>
            </Card>
          </Col>
          <Col span={5}>
            <Card bordered={false} className="innerCard">
              <h2>
                3455 <InfoCircleOutlined />
              </h2>
              <h4>Past Metric</h4>
            </Card>
          </Col>
          <Col span={5}>
            <Card bordered={false} className="innerCard">
              <h2>
                3455 <InfoCircleOutlined />
              </h2>
              <h4>Missed Metric</h4>
            </Card>
          </Col>
          <Col span={5}>
            <Card bordered={false} className="innerCard">
              <h2>
                3455 <InfoCircleOutlined />
              </h2>
              <h4>Failed Metric</h4>
            </Card>
          </Col>
          <Col span={5}>
            <Card bordered={false} className="innerCard">
              <h2>
                3455 <InfoCircleOutlined />
              </h2>
              <h4>Pending Metric</h4>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default AppCardRow;
