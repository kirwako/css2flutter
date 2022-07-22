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
      <Footer />
    </div>
  );
}

export default App;
