import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteFilled } from '@ant-design/icons';
import { Avatar, Card, Button } from 'antd';

const { Meta } = Card;

function ExpenseTile({ id, expenseName, amountValue, categoryValue, deleteTile, editTile }) {
  console.log("in expense tile");
  console.log(`id is : ${id}`);
  console.log(`${expenseName} ${amountValue} ${categoryValue}`);

  let imgSrc;
  if (categoryValue === "Food") {
    imgSrc = 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg';
  } else if (categoryValue === "Transport") {
    imgSrc = 'https://www.shutterstock.com/shutterstock/photos/2427575795/display_1500/stock-photo-europe-is-the-third-most-populous-continent-after-asia-and-africa-and-it-covers-an-area-of-about-2427575795.jpg';
  } else {
    imgSrc = 'https://static8.depositphotos.com/1052036/799/v/950/depositphotos_7991018-stock-illustration-bucket-full-of-entertainment.jpg';
  }

  return (
    <div className='card'>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src={imgSrc}
            backGround='black'
            width={300}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" onClick={() => editTile(id)}/>,
          <DeleteFilled key="ellipsis" onClick={() => deleteTile(id)}/>,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
          title={expenseName}
          description={amountValue}
        />
      </Card>
    </div>
  );
}

export default ExpenseTile;