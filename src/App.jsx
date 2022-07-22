import React from "react";
// import { Layout } from "antd";
import Logo from "./components/TopSection/TopSection";
import OperatingArea from "./components/OperatingArea/OperatingArea";
import Footer from "./components/Footer/Footer";

import "./App.css";

// const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Logo />
      <OperatingArea />
      <div className="container avatar-container">
        <div id="avator">Hello World</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
