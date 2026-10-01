interface ProductType {
  id: string;
  name: string;
}

export type ReducerState = {
  products: ProductType[];
};

export const actionTypes = {
  set: "SET_PRODUCTS",
  add: "ADD_PRODUCT",
} as const;

// type AllActionKeys = keyof typeof actionTypes;
// type AllActionTypes = (typeof actionTypes)[AllActionKeys];

export type AddProducts = {
  type: typeof actionTypes.set;
  payload: ReducerState["products"];
};

export type AddProduct = {
  type: typeof actionTypes.add;
  payload: ProductType;
};

type ActionTypes = AddProducts | AddProduct;

const reducer = (state: ReducerState, action: ActionTypes) => {
  switch (action.type) {
    case actionTypes.set:
      return {
        ...state,
        products: action.payload,
      };
    case actionTypes.add:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
