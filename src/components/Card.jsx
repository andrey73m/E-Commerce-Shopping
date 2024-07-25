import { useContext } from "react"
import { ShoppingContext } from "../context"
import { AddIcon } from "./icons/Add"
import { CheckIcon } from "./icons/Check"

export const Card = ({ productData }) => {
  const {
    openDetails,
    setProductToShow,
    cartProducts,
    setCartProducts,
    closeDetails,
    closeCartMenu,
  }
  = useContext(ShoppingContext)
  const showProduct = (productDetails) => {
    openDetails()
    setProductToShow(productDetails)
    closeCartMenu()
  }
  const addProductsToCart = (event, productInfo) => {

    const productIndex = cartProducts.findIndex(product => product.id === productInfo.id)
    let newCart = []
    if (productIndex >= 0) {
      newCart = [...cartProducts]
      newCart[productIndex].quantity++
       newCart[productIndex].price = parseFloat((productInfo.price + newCart[productIndex].price).toFixed(2))
    } else {
      newCart = [...cartProducts, { ...productInfo, quantity: 1 }]
    }

    event.stopPropagation()
    setCartProducts(newCart)
    closeDetails()

    // let productQuantity = newCart.map(product => product.quantity)
    // console.log('cantidad',productQuantity)
  }

  const renderIcon = (id) => {
    const isInCart = cartProducts.filter(product => product.id === id).length > 0
    if(isInCart && productData.quantity >= 5) {
    return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-gray-100 rounded-full m-2 p-1 hover:text-green-400">
          <CheckIcon/>
        </div>
        )
      }else {
          return(
            <button className="absolute top-0 right-0 flex justify-center items-center bg-gray-100 rounded-full m-2 p-1 hover:text-green-400"
              onClick={(event) => addProductsToCart(event, productData)}>
              <AddIcon />
            </button>
          )
      }
  }


  return(
    <div className="bg-slate-50 cursor-pointer w-80 h-96 p-2 rounded-lg  hover:shadow-xl"
      onClick={() => showProduct(productData)}
    >
      <figure className="relative w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-slate-100 rounded-lg text-black text-xs m-2 px-3 py-1">{productData?.category}</span>
        <img className="w-full h-full rounded-lg" src={productData?.image} alt="producto"/>
        {renderIcon(productData.id)}
      </figure>
      <p className="flex justify-between px-2 my-3">
        <span className="font-semibold line-clamp-2">{productData?.title}</span>
        <span className="text-lg font-medium">${productData?.price}</span>
      </p>
    </div>
  )
}
