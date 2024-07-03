import { Product } from "./types";

export interface StoreContext {
    products: Product[];
    getProducts: () => Promise<void>;
     loading: boolean
  }