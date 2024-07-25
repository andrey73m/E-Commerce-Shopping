import { CalendarIcon } from "./icons/Calendar";
import { DollarIcon } from "./icons/Dollar";
import { ProductIcon } from "./icons/Product";
import { HourIcon } from "./icons/Hour";
import { ArrowRightIcon } from "./icons/ArrowRight";


export const OrdersCard = props => {

  const { totalPrice, totalProducts, date, time } = props;

  return(
    <section className="flex justify-between items-center my-2 border border-slate-300 rounded-lg p-3 hover:shadow-lg">
      <div className="flex items-center justify-between grow gap-2 px-2 ">
          <ProductIcon/>
          <p>{`${totalProducts} ${totalProducts === 1 ? "Product": "Products"}`} </p>
          <DollarIcon/>
          <p>${totalPrice}</p>
          <CalendarIcon/>
          <p>{date}</p>
          <HourIcon/>
          <p>{time}</p>
          <div className="hover:text-blue-500 cursor-pointer">
          <ArrowRightIcon />
          </div>
      </div>

    </section>
  )
}