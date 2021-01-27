import React, { Component } from 'react';
import { Table, Card } from 'antd';

const tableColumn = [
  {
    title: 'NAME',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'LOCATION',
    dataIndex: 'address',
    scopedSlots: { customRender: 'location' },
  },
  {
    title: 'STATUS',
    dataIndex: 'address',
    scopedSlots: { customRender: 'address' },
  },
  {
    title: 'ENTRIES',
    dataIndex: 'age',
    scopedSlots: { customRender: 'location' },
  },
  {
    title: 'RISK PROFILE',
    dataIndex: 'location',
    scopedSlots: { customRender: 'location' },
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class AppTableData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRowKeys: [],
    };

    this.onSelectChange = this.onSelectChange.bind(this);
  }
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  render() {
    const { selectedRowKeys } = this.state;

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div className="cardSettings">
        <Card className="innerCard" bordered={false}>
          <Table
            rowSelection={rowSelection}
            columns={tableColumn}
            dataSource={data}
          />
        </Card>
      </div>
    );
  }
}

export default AppTableData;
