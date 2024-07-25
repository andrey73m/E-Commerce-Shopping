import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingContext } from "../context"
import { ShoppingBagIcon } from "./icons/ShoppingBag"

export const Navbar = () => {
  const {
    cartProducts,
    openCartMenu,
  } = useContext(ShoppingContext)
  const activeStyle = "underline underline-offset-4"
  
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to='/'
            className={({ isActive })=> isActive ? activeStyle : undefined}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink to={encodeURI("/category/men's clothing")}
            className={({ isActive })=> isActive ? activeStyle : undefined}
          >
            {"Men's clothing"}
          </NavLink>
        </li>
        <li>
          <NavLink to={encodeURI("/category/women's clothing")}
            className={({ isActive })=> isActive ? activeStyle : undefined}
          >
            {"Women's clothing"}
          </NavLink>
        </li>
        <li>
          <NavLink to='/category/jewelery'
            className={({ isActive })=> isActive ? activeStyle : undefined}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink to='/category/electronics'
            className={({ isActive })=> isActive ? activeStyle : undefined}
          >
            Electronics
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-slate-500">
            example@gmail.com
        </li>
        <li>
          <NavLink to='/my-orders'
            className={({ isActive })=> isActive ? activeStyle : undefined}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account'
            className={({ isActive })=> isActive ? activeStyle : undefined}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in'
            className={({ isActive })=> isActive ? activeStyle : undefined}
          >
            Sign In
          </NavLink>
        </li>
        <button className="flex items-center hover:text-gray-500 cursor-pointer" onClick={()=>(openCartMenu())}>
            <ShoppingBagIcon/>
          <div>
            {cartProducts.length}
          </div>
        </button>
      </ul>
    </nav>  
  )
}