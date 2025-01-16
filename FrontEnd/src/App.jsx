import './App.css'
import { createBrowserRouter, RouterProvider, Route , Routes} from 'react-router-dom'
import MainPage from './MainPage.jsx' 
import Hotels from './Hotels.jsx' 
import About from './About.jsx'
import TS from './TouristSpot.jsx'
import Food from './Food.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />, // Default route (you can change to a homepage component)
  },
  {
    path: "/mainpage",
    element: <MainPage />,
  },
  {
    path: "/hotels",
    element: <Hotels />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/TouristSpot",
    element: <TS />, 
  },
  {
    path: "/Food",
    element: <Food />, 
  },
  {
    path: "*", // Catch-all route for undefined paths
    element: <h1>404: Page Not Found</h1>,
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;
