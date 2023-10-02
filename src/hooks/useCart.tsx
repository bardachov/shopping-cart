import { useContext } from "react";
import { CartContext } from "../providers/cart/CartContext";

export const useCart = () => {
  const {addItem, cart, removeItem} = useContext(CartContext)

  return {
    addItem,
    cart,
    removeItem
  }
}