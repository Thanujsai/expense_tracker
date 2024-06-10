import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;


function ExpenseTile({expenseName,amountValue,categoryValue}) {
    console.log("in expense tile")
    console.log(expenseName+' '+amountValue+' '+categoryValue);
  return (
    <div className='card'>
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis"/>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title={expenseName}
      description={amountValue}
    />
  </Card>
    </div>
  )
}

export default ExpenseTile
