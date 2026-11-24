import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/shop',
    element: <Shop />
  },
  {
    path: '/cart',
    element: <Cart />
  }
]

export default routes;