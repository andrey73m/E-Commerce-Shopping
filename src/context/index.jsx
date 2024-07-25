import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ShoppingContext = createContext()

export const ShoppingContextProvider = ( { children }) => {
  const [productToShow, setProductToShow] = useState({})
  const [cartProducts, setCartProducts] = useState([])
  
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const openDetails = () => setIsDetailsOpen(true)
  const closeDetails = () => setIsDetailsOpen(false)

  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false)
  const openCartMenu = () => setIsCartMenuOpen(true)
  const closeCartMenu = () => setIsCartMenuOpen(false)

  const [order, setOrder] = useState([])

  const [products, setProducts] = useState(null);
  const [filteredproducts, setFilteredProducts] = useState(null);

  const [searchProduct, setSearchProduct] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const result = await response.json();
        setProducts(result)
      } catch(error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const filteredProductsByName = (products, searchProduct) => {
    return products?.filter(product => product.title.toLowerCase().includes(searchProduct.toLowerCase()))
  }

  useEffect(() => {
    if(searchProduct) setFilteredProducts(filteredProductsByName(products, searchProduct))
    }, [products, searchProduct])

 
  return (
    <ShoppingContext.Provider value={{
      openDetails,
      closeDetails,
      isDetailsOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCartMenuOpen,
      openCartMenu,
      closeCartMenu,
      order,
      setOrder,
      products,
      setProducts,
      searchProduct,
      setSearchProduct,
      filteredproducts,
      setFilteredProducts
    }}>
      {children}
    </ShoppingContext.Provider>
  )
}
