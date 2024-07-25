import { useContext } from "react"
import { OrdersCard } from "../components/OrdersCard"
import { ShoppingContext } from "../context"
import { Link } from "react-router-dom"

export const MyOrders = () => {
  const {
    order,
   } = useContext(ShoppingContext)
  return (
    <>
      <div className="flex items-center justify-center relative w-80">
        <h1 className="font-medium text-xl">
          My Orders
        </h1>
      </div>
      {
        order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`} className="cursor-default">
            <OrdersCard date={order.date} time={order.time} totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
          </Link>
        ))
      }
    </>
  )
}