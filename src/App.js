import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers/index";
import { CTA, Brand, Navbar } from "./components/index";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <a href="https://www.facebook.com">
          <Navbar />
        </a>
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
