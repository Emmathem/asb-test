import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

class AppCardRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card>221</Card>
          </Col>
          <Col span={6}>
            <Card />
          </Col>
          <Col span={6}>
            <Card />
          </Col>
          <Col span={6}>
            <Card />
          </Col>
        </Row>
      </div>
    );
  }
}
export default AppCardRow;
