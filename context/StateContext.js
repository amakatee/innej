
import {createContext, useRef, useEffect, useState} from "react"
const ProductsContext = createContext()

export const StateContext = (  {children}) => {
    const [sidebar, setSideBar] = useState(false)
    const [shoppingCartNav, setShoppingCartNav] = useState(false)



    return <ProductsContext.Provider
    value={{
        sidebar,
        setSideBar,
        shoppingCartNav,
        setShoppingCartNav
        
    }}
    
    >

      {children}
    </ProductsContext.Provider>
}

export default ProductsContext
