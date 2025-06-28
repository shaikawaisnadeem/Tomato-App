import { createContext } from "react";

const ReactContext = createContext({
  listOfItems: [],
  eachCartItemsCount: [],
  addToCart: () => { },
  removeFromCart: () => { },
  cartTotalAmount: ()=>{},
  toggleTheme: false,
  setToggleRightFun: ()=>{}
});

export default ReactContext;
