import React from 'react';

import { List, Card } from 'antd';

const data = [
  {
        number:'01',
        first:'초급',
        daraja:"Boshlang'ich",
        text:'Boshlang’ich darajadagilar uchun darslar to’plami. Umumiy darslar 25 tani tashkil qiladi.'
  },
      {
        number:'02',
        first:'중급',
        daraja:"O’rta",
        text:'Boshlang’ich darajadagilar uchun darslar to’plami. Umumiy darslar 25 tani tashkil qiladi.'
      },
      {
        number:'03',
        first:'고급 ',
        daraja:"Yuqori",
        text:'Boshlang’ich darajadagilar uchun darslar to’plami. Umumiy darslar 25 tani tashkil qiladi.'
      }
];

function AppSection2() {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h1 className="title-01">한국어 비디 <span className="text-danger">오</span> 수 <span className="text-danger">업</span> </h1>
          <h2 className="title-01">Koreys tili video <span className="text-danger">darsliklar</span> to’plami</h2>
          </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card className="px-5 card1">
                <h1 className="text-num">{item.number}</h1>
                <p className="text-num2"> {item.first} <span className="text-dark">{item.daraja}</span> daraja</p>
                <p>{item.text}</p>
                <hr className="hr-style"></hr>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>  
  );
}

export default AppSection2;