import React, { Component } from "react";
import HeaderComponent from "./component/layout/header/header-component";
import FooterComponent from "./component/layout/footer/footer-component";
import MainComponent from "./component/layout/container/main-container-component";

class AppComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default AppComponent;
