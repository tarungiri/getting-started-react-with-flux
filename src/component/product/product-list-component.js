import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductRow from "./product-component";
import productStore from "../../stores/product-store";
import * as productActions from "../../actions/product-actions";

class ProdutListComponent extends Component {
  constructor(props) {
    super(props);
    this.setProductListState = this.setProductListState.bind(this);
    this.state = {
      allProducts: []
    };
  }

  setProductListState() {
    debugger;
    this.setState({
      allProducts: productStore.getAllProducts()
    });
  }

  componentWillUnmount() {
    productStore.removeListener("change", this.setProductListState);
  }

  componentDidMount() {
    this.setProductListState();
  }

  delete(id) {
    const prodId = id;
    productStore.on("change", this.setProductListState);
    productActions.deleteProduct(prodId);
  }

  render() {
    let rows = this.state.allProducts.map(product => {
      return (
        <ProductRow
          key={product.id}
          data={product}
          deleteProduct={this.delete.bind(this)}
        />
      );
    });

    return (
      <div>
        <div>
          <h3>Product List</h3>
          <Link to="/products/add" className="waves-effect waves-light btn">
            Add New Product
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
              <th />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default ProdutListComponent;
