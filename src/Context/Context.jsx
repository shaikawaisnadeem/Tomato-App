import { createContext } from "react";

const ReactContext = createContext({
  contextValue: [],
  eachCartItemsCount: [],
  addToCart: () => { },
  removeFromCart: () => { },
  cartTotalAmount: ()=>{}
});

export default ReactContext;
