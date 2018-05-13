import uuid from "uuid/v4";

const defaultProducts = [
  {
    id: uuid(),
    productName: "Eclair",
    price: 0.87
  },
  {
    id: uuid(),
    productName: "Jellybean",
    price: 2.5
  },
  {
    id: uuid(),
    productName: "Lollipop",
    price: 3.8
  }
];
let products = defaultProducts;
let productAPI = function() {
  return {
    getAllProducts: products,
    getProductById: function(pid) {
      return products.find(element => {
        return element.id === pid;
      });
    },
    saveProduct: function(product) {
      debugger;
      products.push(product);
    },
    updateProduct: function(product) {
      debugger;
      Object.assign(
        products,
        products.map(el => (el.id === product.id ? product : el))
      );
    },
    deleteProduct: function(pid) {
      let foundIndex = products.findIndex(element => element.id === pid);
      products.splice(foundIndex, 1);
    }
  };
};

export default productAPI;
