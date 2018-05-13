import React, { Component } from "react";
import "./footer-component.css";

class FooterComponent extends Component {
  render() {
    return (
      <footer className="page-footer footer-fixed">
        <div className="footer-copyright">
          <div>© 2018 react@testexapmle.com</div>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
