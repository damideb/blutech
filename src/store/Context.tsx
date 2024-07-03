import {createContext, useState} from "react"
import { StoreContext } from "../typesAndInterface/interface"
import { Product } from "../typesAndInterface/types"

const Context = createContext<StoreContext |null>(null)

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {

    const [products, setProducts] = useState<Product[]>([])
    const[searchedProduct, setSearchedProduct] = useState<Product[]>([])
    const[loading, setLoading] = useState(true)

   const getProducts = async()=>{
    try{
      const res=  await fetch ('http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX')
        const data = await res.json()
        const slicedData = data.slice(0,11)
        setProducts(slicedData)
        setSearchedProduct(slicedData)
       
    }
    catch(err){
        console.log(err)
    }
    finally{
        setLoading(false)
    }
   }

    return(
        
        <Context.Provider value={{products, setProducts, getProducts, loading, setSearchedProduct, searchedProduct}}>
            {children}
        </Context.Provider>

    )

}

export {ContextProvider, Context}
