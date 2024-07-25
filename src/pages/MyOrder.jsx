import { useContext } from "react"
import { ShoppingContext } from "../context"
import { OrderCard } from "../components/OrderCard"
import { Link } from "react-router-dom"
import { ArrowLeftIcon } from "../components/icons/ArrowLeft"

export const MyOrder = () => {
 
  const {
    order,
  } = useContext(ShoppingContext)

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if(index === 'last') index = order?.length - 1
  return (
    <>
    <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to="/my-orders/" className="absolute left-0 hover:text-blue-400">
          <ArrowLeftIcon/>
        </Link>
        <h1>
          myOrders
        </h1>
      </div>
    <div className="flex flex-col w-[300px]">
        {
          order?.[index]?.products.map(product => (
            <OrderCard key={product.id} id={product.id} title={product.title} imageUrl={product.image} price={product.price} quantity={product.quantity}
            />
          ))
        }
      </div>
    </>
  )
}