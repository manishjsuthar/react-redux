import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
} from "../constants";

const initProduct = {
  numberCart: 0,
  cardData: [],
};
export default function cardItems(state = initProduct, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.numberCart === 0) {
        let cart = {
          id: action.data.id,
          quantity: 1,
          name: action.data.name,
          price: action.data.price,
        };
        state.cardData.push(cart);
      } else {
        let check = false;
        state.cardData.map((item, key) => {
          if (item.id === action.data.id) {
            state.cardData[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.data.id,
            quantity: 1,
            name: action.data.name,
            price: action.data.price,
          };
          state.cardData.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };

    case INCREASE_QUANTITY:
      state.numberCart++;
      state.cardData[action.data].quantity++;
      return {
        ...state,
      };

    case DECREASE_QUANTITY:
      let quantity = state.cardData[action.data].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.cardData[action.data].quantity--;
      }
      return {
        ...state,
      };

    case DELETE_CART:
      let quantity_ = state.cardData[action.data].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        cardData: state.cardData.filter((item) => {
          return item.id !== state.cardData[action.data].id;
        }),
      };

    default:
      return state;
  }
}
