import { Link } from "react-router-dom"
import { useContext } from "react"
import { CloseIcon } from "./icons/Close"
import { ShoppingContext } from "../context"
import { OrderCard } from "./OrderCard"
import { totalPrice } from "../utils/totalPrice"
import { date, time } from "../utils/dateTime.js"
export const CartMenu = () => {
  
  
  const {
    isCartMenuOpen,
    closeCartMenu,
    cartProducts,
    setCartProducts,
    setOrder,
    order,
    setSearchProduct,
  } = useContext(ShoppingContext)

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id !== id)
    setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: date(),
      time: time(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }
    setOrder([...order, orderToAdd])
    setCartProducts([])
    closeCartMenu()
    setSearchProduct(null)
  }

  return (
    <aside className={`${isCartMenuOpen ? "flex" : "hidden"} flex-col fixed right-0 border top-[80px] z-20 border-black bg-white rounded-lg w-[415px] h-[calc(100%-68px)]`}>
      <div className="justify-between items-center p-4">
        <div className="flex justify-between">
          <h2 className="font-medium text-2xl">My Order</h2>
            <button className="hover:text-red-400"
            onClick={()=> closeCartMenu()}
            >
            <CloseIcon/>
            </button>
          </div>
      </div>
      <div className="flex-1 px-4 overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300">
        {
          cartProducts.map(product => (
            <OrderCard key={product.id} id={product.id} title={product.title} imageUrl={product.image} price={product.price} quantity={product.quantity}
            handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className="px-1 mb-6">
        <p className="flex justify-between items-center w-full mb-2 p-1 font-medium text-xl bg-slate-100 rounded-lg">
          <span>Total: </span>
          <span>${totalPrice(cartProducts)}</span>
        </p>
        <Link to="/my-orders/last">
        <button className="bg-black p-3 text-white w-full rounded-lg "
         onClick={()=> handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}
