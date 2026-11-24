import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'
import NotFound from './pages/NotFound/NotFound'

const routes = [
  {
    path: '/',
    element: <NotFound />
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