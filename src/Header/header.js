import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import  "../Assets/images/fon1.jpg"
import logo from "../Assets/images/logoo1.png"
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return (
   <div className="header pt-3">

<Nav defaultActiveKey="/home" as="ul" className="container">
<Nav.Item as="li">
    <Nav.Link href="/home"><img src={logo} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""></img></Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/home">Darslar</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link >Topik</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link >Konsalting</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link >Kitoblar</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link >To’lov</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link >Biz haqimizda</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li" className="ms-5 ps-5">
    <Nav.Link>Kirish</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li" className="btn btn-light">
    <Nav.Link>Registratsiya</Nav.Link>
  </Nav.Item>
</Nav>    
      </div>
    )
}

export default Header;