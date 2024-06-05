import { createContext } from 'react';
import { Product } from '../lib/data.ts';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};

export const CartContext = createContext(defaultCartValue);
