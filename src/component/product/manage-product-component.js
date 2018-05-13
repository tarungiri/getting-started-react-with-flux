import React from "react";
import { Redirect } from "react-router-dom";
import uuid from "uuid/v4";
import productStore from "../../stores/product-store";
import * as productActions from "../../actions/product-actions";

class ManageProductComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      product_name: "",
      price: "",
      isSave: false,
      isNew: true
    };
  }

  componentDidMount() {
    debugger;
    const prodId = this.props.match.params.id;
    if (!!prodId) {
      let product = productStore.getProductByProductId(prodId);
      this.setState({
        id: product.id,
        product_name: product.productName,
        price: product.price,
        isNew: !!!prodId
      });
    }
  }

  save = event => {
    event.preventDefault();
    debugger;
    const { product_name, price } = this.state;
    if (!product_name | !price) {
      alert("missing required details.");
      return;
    }
    if (this.state.isNew) {
      productActions.addNewProduct({
        id: uuid(),
        productName: product_name,
        price: price
      });
    } else {
      productActions.updateProduct({
        id: this.state.id,
        productName: this.state.product_name,
        price: this.state.price
      });
    }
    this.setState({
      isSave: true,
      isNew: false
    });
  };

  onInputChange = event => {
    const state = this.state;
    state[event.target.id] = event.target.value;
    this.setState({
      state
    });
  };

  render() {
    const { product_name, price } = this.state;
    if (this.state.isSave === true) {
      return <Redirect to="/products" />;
    }

    let manageProductHeader = this.state.isNew
      ? "Add New Product"
      : "Edit Product Details";

    let action = this.state.isNew ? "Save" : "Update";

    return (
      <div className="row">
        <h4>{manageProductHeader}</h4>
        <br />
        <form className="col s6">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="product_name"
                type="text"
                value={product_name}
                className="validate"
                ref="product_name"
                onChange={this.onInputChange}
              />
              <label className="active" for="product_name">
                Product Name
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="price"
                type="text"
                value={price}
                className="validate"
                ref="price"
                onChange={this.onInputChange}
              />
              <label className="active" for="price">
                Price
              </label>
            </div>
          </div>
          <a class="waves-effect waves-light btn" onClick={this.save}>
            {action}
          </a>
        </form>
      </div>
    );
  }
}

export default ManageProductComponent;
