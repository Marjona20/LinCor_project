import React, { useState } from 'react';
import logo from '../../assets/images/logo-1.png';
import { Anchor, Drawer, Button } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="mobileHidden">
          <Anchor targetOffset="65">
          <div className="me-5">
          <img src={logo} style={{width:'130px', height:'40px'}}  alt=""></img>
        </div>
            <div className="h-div ms-5 me-5">
            <Link href="/home" title="Darslar" />
            <Link href="/home" title="Topik" />
            <Link href="/home" title="Konsalting" />
            <Link href="/home" title="Kitoblar" />
            <Link href="/home" title="To'lov" />
            <Link href="/home" title="Biz haqimizda" />
            </div>
            <div className="h-div ms-5">
            <Link href="/home" title="Kirish" />
            <Button className="btn-secondary"><Link href="/home" title="Registratsiya" /></Button>
          </div>
          </Anchor>
        </div>
        <div className="mobileVisible">
        <div className="d-flex fa-align-center">
         <Button className="me-5" type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <img className="ms-5 me-5" src={logo} style={{width:'150px', height:'50px'}}  alt="logo"></img>
           <div className="restangle-1 px-5 text-1">
           <h3 className="text-1 mt-2">Kabinet</h3>
           </div>
          </div>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
            <Link href="/home" title="Darslar" />
            <Link href="/home" title="Topik" />
            <Link href="/home" title="Konsalting" />
            <Link href="/home" title="Kitoblar" />
            <Link href="/home" title="To'lov" />
            <Link href="/home" title="Biz haqimizda" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;