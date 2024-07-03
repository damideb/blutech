import { Product } from "./types";

export interface StoreContext {
    products: Product[];
    searchedProduct:Product[]
    setProducts:React.Dispatch<React.SetStateAction<Product[]>>;
    setSearchedProduct:React.Dispatch<React.SetStateAction<Product[]>>;
    getProducts: () => Promise<void>;
     loading: boolean
  }