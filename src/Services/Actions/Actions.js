import {
  ADD_TO_CART,
  DELETE_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../constants";
export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export function IncreaseQuantity(data) {
  return {
    type: INCREASE_QUANTITY,
    data,
  };
}
export function DecreaseQuantity(data) {
  return {
    type: DECREASE_QUANTITY,
    data,
  };
}

export function DeleteCart(data) {
  return {
    type: DELETE_CART,
    data: data,
  };
}
