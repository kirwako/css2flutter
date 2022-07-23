import React, { useEffect } from "react";
import Logo from "./components/TopSection/TopSection";
import OperatingArea from "./components/OperatingArea/OperatingArea";
import Footer from "./components/Footer/Footer";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-148002086-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Logo />
      <OperatingArea />
      <Footer />
    </>
  );
}

export default App;
