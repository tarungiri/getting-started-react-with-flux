import dispatcher from "../dispatcher/app-dispatcher";
import { actionTypes } from "../constants/action-types";

export function addNewProduct(data) {
  dispatcher.dispatch({ type: actionTypes.ADD_PRODUCT, data });
}

export function updateProduct(data) {
  dispatcher.dispatch({ type: actionTypes.UPDATE_PRODUCT, data });
}

export function deleteProduct(id) {
  dispatcher.dispatch({ type: actionTypes.DELETE_PRODUCT, id });
}
