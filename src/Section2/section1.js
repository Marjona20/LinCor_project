import React from 'react';
import { Row, Col } from 'antd';
import video from '../Assets/images/video.png';
import mens from  '../Assets/images/mens.png';

function AppSection1() {
  return (
    <div id="section1" className="section1 pt-4">
  <Row>
    <Col className="text-white div1" xs={{ span: 5, offset: 1 }} lg={{ span: 7, offset: 2 }}>
      <h5 className="text-white">우리의 온라인 수업은 본인에게 흥미를 줄 것이다</h5>
      <p className="small mt-3">각 수업은 당신을 위해 준비되어 있습니다.시간을 설정하여 우리의 수업을 볼 수 있습니다. LinCor, 한국어를 함께 배우자</p>
    </Col>
    <Col className="text-center" xs={{ span: 11, offset: 1 }} lg={{ span: 3, offset: 2 }}>
      <img src={video} alt=""></img>
      <p className="text-white mt-4">Qo’llanma</p>
    </Col>
    <Col className="text-white div1" xs={{ span: 5, offset: 1 }} lg={{ span: 7, offset: 2 }}>
      <h5 className="text-white">Online darslarimiz sizni qiziqtiradi</h5>
      <p className="small mt-3">Biz barcha darslarimizni siz uchun tayyorladik
      Bo’sh vaqtingizni belgilagan holda bizning darslarimizni ko’rishingiz mumkun.</p>
    </Col>
  </Row>
  <Row>
  <Col className="text-center" span={24}>
    <img className="img-style1" src={mens}  alt=""></img>
  </Col>
  </Row>
    </div> 
  );
}

export default AppSection1;
