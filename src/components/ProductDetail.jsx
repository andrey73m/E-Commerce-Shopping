import { useContext } from "react"
import { CloseIcon } from "./icons/Close"
import { ShoppingContext } from "../context"

export const ProductDetail = () => {
  const {
    isDetailsOpen,
    closeDetails,
    productToShow,
  } = useContext(ShoppingContext)

  return (
    <aside className={`${isDetailsOpen ? "flex" : "hidden"} flex-col fixed right-0 border top-[80px] z-20 border-black bg-white rounded-lg w-[415px] h-[calc(100%-68px)]`}>
      <div className="justify-between items-center p-4">
        <div className="flex justify-between">
          <h2 className="font-medium text-2xl">Details</h2>
            <button className="hover:text-red-400"
            onClick={()=> closeDetails()}
            >
            <CloseIcon/>
            </button>
          </div>
        <figure className="px-6">
          <img className="w-full h-80 rounded-lg" src={productToShow.image} alt={productToShow.title} />
        </figure>
        <div className="p-2">
          <h3 className="flex py-2">
            <span className="font-medium text-xl">{productToShow.title}</span>
            <span className="font-medium text-xl mx-3">${productToShow.price}</span>
          </h3>
            <span className="font-light text-md">{productToShow.description}</span>
        </div>
      </div>
    </aside>
  )
}