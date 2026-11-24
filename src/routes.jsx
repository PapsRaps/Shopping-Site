import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'
import NotFound from './pages/NotFound/NotFound'

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
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes;