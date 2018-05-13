import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeComponent from "../component/home/home-component";
import AboutComponent from "../component/about/about-component";
import ProdutListComponent from "../component/product/product-list-component";
import ManageProductComponent from "../component/product/manage-product-component";
import "./../index.css";
import PageNotFoundComponent from "../component/page-not-found-component";

class RoutesComponent extends Component {
  render() {
    return (
      <main className="react-app-content">
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/about" component={AboutComponent} />
          <Route exact path="/products" component={ProdutListComponent} />
          <Route path="/products/add" component={ManageProductComponent} />
          <Route path="/products/:id/edit" component={ManageProductComponent} />
          <Route component={PageNotFoundComponent} />
        </Switch>
      </main>
    );
  }
}

export default RoutesComponent;
