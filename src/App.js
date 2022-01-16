<<<<<<< HEAD
import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
=======
import Header from "./Header/header";
import MainSection from "./Main/MainSection";
import AppSection1 from "./Section2/section1";
import AppSection2 from "./Section2/section2";
import Solution from "./Solution";
>>>>>>> 04310cf2fbb6f8e6e8c4f6e784cdb86db7730f77

import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import AppHome from './views/home';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
<<<<<<< HEAD
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome/>
      </Content>
      <Footer>
        <AppFooter/>  
      </Footer>      
    </Layout>
=======
    <div>
      
    <Header />
    <AppSection1 />
    <AppSection2 />
    <MainSection />
    </div>
>>>>>>> 04310cf2fbb6f8e6e8c4f6e784cdb86db7730f77
  );
}

export default App;
