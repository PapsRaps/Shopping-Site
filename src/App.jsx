import routes from './routes'
import { RouterProvider, createBrowserRouter } from "react-router"

const router = createBrowserRouter(routes)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
