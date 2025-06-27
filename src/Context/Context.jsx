import { createContext, useState } from 'react';

const ReactContext = createContext({
  contextValue: [],
  eachCartItemsCount: [],
  addToCart: ()=>{},
  removeFromCart: ()=>{}

});

export default ReactContext;
