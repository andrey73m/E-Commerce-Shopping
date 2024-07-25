import { DeleteIcon } from "./icons/Delete"

export const OrderCard = props => {

  const { id, title, imageUrl , price, quantity, handleDelete } = props;

  return(
    <section className="flex justify-between items-center mb-3 mx-1">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg" src={imageUrl} alt={title} />
        </figure>
      </div >

      <div className="text-sm font-light px-4 ">
        <p className="line-clamp-2">{title}</p>
        <h3 className="font-medium">Quantity: {quantity}</h3>
      </div>


      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {handleDelete &&
        <button className="cursor-pointer hover:text-red-600">
          <DeleteIcon onClick={() => handleDelete(id)}/>
        </button>
        }         
      </div>
    </section>
  )
}