/* eslint-disable require-jsdoc */
import "./App.scss";
import React from "react";
import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import { NavBar, NavigationDots, SocialMedia } from "./components";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
      <NavigationDots />
      <SocialMedia />
    </div>
  );
}

export default App;
