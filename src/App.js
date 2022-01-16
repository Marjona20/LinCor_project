
import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from "./Header/header";
import MainSection from "./Main/MainSection";
import AppSection1 from "./Section2/section1";
import AppSection2 from "./Section2/section2";



function App() {
  return (
<div>
    <Header />
    <AppSection1 />
    <AppSection2 />
    <MainSection />
    </div>
 );
}

export default App;
