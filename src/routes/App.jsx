import '../styles/App.css'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { MyAccount } from '../pages/MyAccount'
import { MyOrder } from '../pages/MyOrder'
import { MyOrders } from '../pages/MyOrders'
import { NotFound } from '../pages/NotFound'
import { SignIn } from '../pages/SignIn'
import { Navbar } from '../components/Navbar'
import { Layout } from '../components/Layout'
import { ShoppingContextProvider } from '../context'
import { CartMenu } from '../components/CartMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path:'category/:category', element:<Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

export const App = () =>  {

  return (
    <ShoppingContextProvider>
    <BrowserRouter>
      <Layout>
        <AppRoutes/>
      </Layout>
      
      <Navbar />
      <CartMenu/>
    </BrowserRouter>
    </ShoppingContextProvider>
  )
}


