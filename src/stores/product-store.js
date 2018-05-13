import { EventEmitter } from "events";
import productAPI from "../api/products-data";
import dispatcher from "../dispatcher/app-dispatcher";
import { actionTypes } from "../constants/action-types";

class ProductStore extends EventEmitter {
  getAllProducts() {
    return productAPI().getAllProducts;
  }

  getProductById(id) {
    return productAPI().getProductById(id);
  }

  getProductByProductId(id) {
    return productAPI().getProductById(id);
  }

  saveProduct(product) {
    productAPI().saveProduct(product);
    //this.emit("change");
  }

  updateProduct(product) {
    productAPI().updateProduct(product);
    //this.emit("change");
  }
  deleteProduct(id) {
    productAPI().deleteProduct(id);
    this.emit("change");
  }

  handleActions(action) {
    switch (action.type) {
      case actionTypes.ADD_PRODUCT: {
        this.saveProduct(action.data);
        break;
      }
      case actionTypes.UPDATE_PRODUCT: {
        this.updateProduct(action.data);
        break;
      }
      case actionTypes.DELETE_PRODUCT: {
        this.deleteProduct(action.id);
        break;
      }
      default: {
      }
    }
  }
}

const productStore = new ProductStore();

dispatcher.register(productStore.handleActions.bind(productStore));
export default productStore;
