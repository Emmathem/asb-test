import React, { Component } from 'react';
import { Table } from 'antd';

const tableColumn = [
  {
    title: 'NAME',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'LOCATION',
    dataIndex: 'location',
    scopedSlots: { customRender: 'location' },
  },
  {
    title: 'STATUS',
    dataIndex: 'location',
    scopedSlots: { customRender: 'location' },
  },
  {
    title: 'ENTRIES',
    dataIndex: 'location',
    scopedSlots: { customRender: 'location' },
  },
  {
    title: 'RISK PROFILE',
    dataIndex: 'location',
    scopedSlots: { customRender: 'location' },
  },
];

class AppTableData extends Component {
  render() {
    return (
      <div>
        <Table columns={tableColumn} />
      </div>
    );
  }
}

export default AppTableData;
