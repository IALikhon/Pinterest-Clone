/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import items from "../../data/items"

const ItemContext = createContext();

export const useItem = () => useContext(ItemContext);

const itemReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLELIKED": {
      return state.map((item) =>
        item.id === action.id ? { ...item, isLiked: !item.isLiked } : item
      
      );
      
    }

    default:
      return state;
  }
};

const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemReducer, items);

  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
