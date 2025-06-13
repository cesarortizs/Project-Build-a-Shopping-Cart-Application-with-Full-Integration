import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    setShoppingCart: () => {},
    total: 0,
    setTotal: () => {}
})