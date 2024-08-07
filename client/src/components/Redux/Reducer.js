
const initialState = {
  cart: [],
  wishlist:[]
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case "REMOVE_ITEM":
      const data = state.cart.filter((i) => i._id !== payload._id);
      return { ...state, cart: data };
    case "DELETE":
      return {
        ...state,
        cart: [],
      };
    case "ADD_WISH":
      return {
        ...state,
        wishlist: [...state.wishlist, payload],
      };
    case "REMOVE_WISH":
    const removeData = state.wishlist.filter((i) => i._id !== payload._id);
    return { ...state, wishlist: removeData };
    case "DELETE_ALL_WISHES":
      return {
        ...state,
        wishlist: [],
      };
    default:
      return state;
  }
};
