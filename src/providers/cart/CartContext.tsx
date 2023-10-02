import { createContext } from "react";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface ICartContext {
  cart: Array<IProduct>
  addItem: (product: IProduct) => void
  removeItem: (product: IProduct) => void
}

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {}
} as ICartContext);