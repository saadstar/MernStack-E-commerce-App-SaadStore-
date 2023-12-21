export const ADD = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};
export const REMOVE_ITEM = (product) => {
  return {
    type: "REMOVE_ITEM",
    payload: product,
  };
};
export const DELETE =(product) => {
  return {
    type: "DELETE",
    payload:product
  }
}
export const increment = (product) => {
  return {
    type: "INCREMENT",
    payload: product,
  };
};
export const decrement = (product) => {
  return {
    type: "DECREMENT",
    payload: product,
  };
};
