import "./App.css"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Info from './components/Info';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/search",
      element: (
        <>
          <Navbar />
          <Info />
        </>
      ),
    },
  ]);

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  );
}

export default App
